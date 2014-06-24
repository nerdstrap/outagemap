<%@ Page Language="C#" %>

<%@ Import Namespace="System.Collections.Generic" %>
<%@ Import Namespace="System.IO" %>
<%@ Import Namespace="System.Web.Mail" %>
<%@ Import Namespace="System.Xml" %>
<%@ Import Namespace="System.Linq" %>
<%@ Import Namespace="System.Web.Script.Serialization" %>
<%@ Import Namespace="System.Xml.Linq" %>

<script runat="server">
	// CURRENT ENVIRONMENT
	protected static EnvironmentType CurrentEnvironment {
		get {
			string host = HttpContext.Current.Request.Url.Host.ToLower();
			if(host.Contains("localhost")) { return EnvironmentType.Localhost; }
			if(host.Contains("dev.") || host.Contains("dev2009.")) { return EnvironmentType.Development; }
			if(host.Contains("test.") || host.Contains("test2009.")) { return EnvironmentType.Test; }
            if (host.Contains("outagemap.azurewebsites.net")) { return EnvironmentType.Azure; }
			// default to production
			return EnvironmentType.Production;
		}
	}


	//--------------------------------------------------
	// OnLoad
	//--------------------------------------------------
	protected override void OnLoad(EventArgs e) {
		base.OnLoad(e);

		string filePath = Server.MapPath(@"~/omsdata/global/Data/omsdata/OMS2AEPWEB.XML");

		this.Page.Response.Clear();
		this.Page.Response.ContentType = "text/xml";

		// Add a non-expires so IE doesn't cache the data.
		this.Page.Response.AddHeader("Pragma", "public");
		this.Page.Response.AddHeader("Cache-control", "private");
		this.Page.Response.AddHeader("Expires", "-1");

		//string xml = "<?xml version=\"1.0\" standalone=\"yes\"?><blank><a>a</a></blank>";

		string xml = GetXML();


        XmlDocument doc = new XmlDocument();
        doc.LoadXml(xml);
        


        
        string eventNodeXPath = "Something/Segments/Segment";
        XmlNodeList nodes = doc.SelectNodes(eventNodeXPath);

        if (nodes != null)
        {
            foreach (XmlNode node in nodes)
            {
                ReplaceAttributesByNodes(doc, node);
            }
        }
        
        XmlDocument xmlDoc = GetXMLDoc();
        //string json = Newtonsoft.Json.JsonConvert.SerializeObject(xml);
        //string json = new JavaScriptSerializer().Serialize(doc);
        string json = JSon.XmlToJSON(xml); 
        this.Page.Response.ContentType = "application/json";
		this.Page.Response.Write(json);
		this.Page.Response.End();
	}

	//--------------------------------------------------
	// GetTechnicalDifficultyXML
	//--------------------------------------------------
	protected static string GetTechnicalDifficultyXML() {
		return @"
<?xml version='1.0' encoding='iso-8859-1'?>
";
	}
	//--------------------------------------------------
	// SendErrorEmail
	//--------------------------------------------------
	public static void SendErrorEmail(string emailTo, string subject, string htmlBody) {
		SendErrorEmail(emailTo, subject, htmlBody, null);
	}
	public static void SendErrorEmail(string emailTo, string subject, string htmlBody, Exception ex) {
		MailMessage message = new MailMessage();

		string defaultEmail = "jbutley@aep.com, deazusenis@aep.com, jbthirumalaiappan@aep.com, dfkrumel@aep.com, makelawala@aep.com";
		//string defaultEmail = "jbutley@aep.com";
		message.To = (String.IsNullOrEmpty(emailTo)) ? defaultEmail : emailTo;

		Uri thisURL = HttpContext.Current.Request.Url;
		string host = thisURL.Host;
		string protocol = (HttpContext.Current.Request.IsSecureConnection) ? "https://" : "http://";
		string domain = protocol + host;

		message.From = "\"AEP Utilities Error Mailer\" <jbutley@aep.com>";
		message.Subject = subject;

		message.BodyFormat = MailFormat.Html;

		string formatting = @"
<style type='text/css'>
	body { font-family:Verdana; font-size:10pt; }
	.msg { font-family:Verdana; font-size:10pt; }
	.tbl, .tbl td { font-family:Verdana; font-size:10pt; }

	.tbl th { font-weight: bold; text-align: left; padding: 6px 9px 6px 9px; vertical-align: top; }
	.tbl td { 
		background-color: #f2f2f2; height: 18px; padding: 6px 9px 6px 9px; vertical-align: top;
	}
	.tbl td.lbl { font-weight: bold; }
	.tbl .alt td { background-color: #fff; }
	.stackTrace { font-size:8pt; background-color: #ccccc; padding: 10px; }
</style>
";

		// Add initial info to body
		string url = HttpContext.Current.Request.Url.AbsoluteUri;
		string referrer = (HttpContext.Current.Request.UrlReferrer == null) ? "" :
				HttpContext.Current.Request.UrlReferrer.AbsoluteUri;

		string preamble = @"
<p class='text'>An automated error has been sent at " + DateTime.Now.ToString("M/d/yyyy h:mm:ss tt") + @"</p>
<p>Page: <a href='" + url + @"'>" + url + @"</a></p>
<p>Referrer: <a href='" + referrer + @"'>" + referrer + @"</a></p>
";
		// Add exception information if it exists
		if(ex != null) {

			preamble += @"
<p>
	<b>Exception Type:</b> " + ex.GetType().FullName + @"<br>
	<b>Exception Message:</b> " + ex.Message + @"
</p>";
			preamble += @"
<pre class='stackTrace'>Stack Trace" + ex.StackTrace + @"</pre>
";
			if(ex.InnerException != null) {
				preamble += @"
<p>
	<b>Inner Exception Type:</b> " + ex.InnerException.GetType().FullName + @"<br>
	<b>Inner Exception Message:</b> " + ex.InnerException.Message + @"
</p>
<pre class='stackTrace'>Stack Trace" + ex.InnerException.StackTrace + @"</pre>
";
			}
		}

		string body = @"
<html>
<head>
" + formatting + @"
</head>
<body>
<div class='msg'>
" + preamble + @"
" + htmlBody + @"
</div>
</body>
</html>
";

		message.Body = body;

		if(CurrentEnvironment != EnvironmentType.Localhost) {
			SmtpMail.Send(message);
		}
	}

	public static string GetXML() {
		// Create an object to return
		string xml = "";

		// Determine which type of list we want to return
		string cacheKey = "OMSOutageData";

		// Check Cache
		Page page = (Page)HttpContext.Current.CurrentHandler;


        //// Check cache for value first
        //if(page.Cache[cacheKey] != null) {
        //    //page.Cache.Remove(cacheKey);
        //    // Use cached value if it exists
        //    return (string)page.Cache[cacheKey];
        //} else {
			// Get XML
			string xmlPath = (CurrentEnvironment == EnvironmentType.Development) ?
				page.Server.MapPath(@"~/global/DATA/omsdata/oms2aepweb.xml") :
				page.Server.MapPath(@"~/global/DATA/omsdata/oms2aepweb.xml");

			//XmlTextReader xtr = new XmlTextReader(xmlPath);
			//XmlDocument xmlDoc = new XmlDocument();
			//xmlDoc.Load(xtr);
			//// Close reader
			//xtr.Close();

			StreamReader sr = new StreamReader(xmlPath);
			string rawXML = sr.ReadToEnd();
			sr.Close();
			XmlDocument xmlDoc = new XmlDocument();
            if (CurrentEnvironment == EnvironmentType.Azure)
            {
                xmlDoc.Load("http://aepohio.com/global/data/omsdata/oms2aepweb.xml");
            }
            else {
                xmlDoc.LoadXml(rawXML);            
            }
			xml = CleanUpXML(xmlDoc);

			// Add xml to cache
			CacheDependency dependency = new CacheDependency(xmlPath);
			
			// JBU 5/24/2011 - Add absolute expiration so data can get stale
			//TimeSpan staleAfter = new TimeSpan(1, 0, 0); // 1 hour
			TimeSpan staleAfter = new TimeSpan(0, 0, 30); // 30 seconds (for testing)
			
			DateTime staleDate = DateTime.UtcNow + staleAfter; // Use UtcNow to avoid time mismatches
			page.Cache.Insert(cacheKey, xml, dependency);
			//page.Cache.Insert(cacheKey, xml, dependency, staleDate, Cache.NoSlidingExpiration);
			
			
        //}

		return xml;
	}

    public static XmlDocument GetXMLDoc()
    {

        // Check Cache
        Page page = (Page)HttpContext.Current.CurrentHandler;



            // Get XML
            string xmlPath = (CurrentEnvironment == EnvironmentType.Development) ?
                page.Server.MapPath(@"~/global/DATA/omsdata/oms2aepweb.xml") :
                page.Server.MapPath(@"~/global/DATA/omsdata/oms2aepweb.xml");

            //XmlTextReader xtr = new XmlTextReader(xmlPath);
            //XmlDocument xmlDoc = new XmlDocument();
            //xmlDoc.Load(xtr);
            //// Close reader
            //xtr.Close();

            StreamReader sr = new StreamReader(xmlPath);
            string rawXML = sr.ReadToEnd();
            sr.Close();
            XmlDocument xmlDoc = new XmlDocument();
            xmlDoc.LoadXml(rawXML);


        return xmlDoc;
    }


    public static void ReplaceAttributesByNodes(XmlDocument document, XmlNode node)
    {
        if (document == null)
        {
            throw new ArgumentNullException("document");
        }

        if (node == null)
        {
            throw new ArgumentNullException("node");
        }

        if (node.HasChildNodes)
        {
            foreach (XmlNode tempNode in node.ChildNodes)
            {
                ReplaceAttributesByNodes(document, tempNode);
            }
        }

        if (node.Attributes != null)
        {
            foreach (XmlAttribute attribute in node.Attributes)
            {
                XmlNode element = document.CreateNode(XmlNodeType.Element, attribute.Name, null);

                element.InnerText = attribute.InnerText;

                node.AppendChild(element);
            }

            node.Attributes.RemoveAll();
        }
    }
    
	public static string CleanUpXML(XmlDocument xmlDoc) {
		string xml = "";
		try {



			XmlNodeList allNodes = xmlDoc.SelectNodes("//*");
			List<XmlNode> nodesToRemove = new List<XmlNode>();
			foreach(XmlNode node in allNodes) {
				if(node != null) {
					// JBU 12/15/2011 - Trim and re-write the id attribute to fix OMS data generation problem: <OperatingCo id="AEP-SEP   ">
					if(node.Attributes != null && node.Attributes["id"] != null && node.Attributes["id"].Value != null) {
						node.Attributes["id"].Value = node.Attributes["id"].Value.Trim();
					}
					
					// Timestamp
					if(node.Name.Equals("dataset", StringComparison.CurrentCultureIgnoreCase)) {
						XmlAttribute timestampAttribute = (node.Attributes == null) ? null : node.Attributes["timestamp"];

						string aspnetString =
							System.Environment.Version.Major.ToString() + "." +
							System.Environment.Version.Minor.ToString() + "." +
							System.Environment.Version.Build.ToString();							
						
							
						XmlAttribute aspnetVersionAttribute = xmlDoc.CreateAttribute("aspnetCLRVersion");
						aspnetVersionAttribute.Value = aspnetString;
						node.Attributes.Append(aspnetVersionAttribute);

						//string dateTimeFormat = "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffK";
						DateTime xmlTime = DateTime.Parse(timestampAttribute.Value);
						string varMonth;
						if(xmlTime.Month < 10) {
							varMonth = "0" + xmlTime.Month.ToString();
						} else {
							varMonth = xmlTime.Month.ToString();
						}
						string varDay;
						if(xmlTime.Day < 10) {
							varDay = "0" + xmlTime.Day.ToString();
						} else {
							varDay = xmlTime.Day.ToString();
						}
						string varHour;
						if(xmlTime.Hour < 10) {
							varHour = "0" + xmlTime.Hour.ToString();
						} else {
							varHour = xmlTime.Hour.ToString();
						}
						string varMinutes;
						if(xmlTime.Minute < 10) {
							varMinutes = "0" + xmlTime.Minute.ToString();
						} else {
							varMinutes = xmlTime.Minute.ToString();
						}
						string varSeconds;
						if(xmlTime.Second < 10) {
							varSeconds = "0" + xmlTime.Second.ToString();
						} else {
							varSeconds = xmlTime.Second.ToString();
						}
						timestampAttribute.Value = xmlTime.Year.ToString() + "-" + varMonth + "-" + varDay + "T" + varHour + ":" + varMinutes + ":" + varSeconds + ".0000000-05:00";
						

						//timestampAttribute.Value = String.Format(dateTimeFormat,"2010-02-22T09:51:22.5547111-05:00");
						//timestampAttribute.Value = timestampAttribute.Value.Substring(0, timestampAttribute.Value.Length());
						//timestampAttribute.Value = String.Format(dateTimeFormat, DateTime.Now.AddMinutes(-1).ToString());

						// timestampAttribute.Value = DateTime.Parse("2010-02-22T07:51:24.8347111-05:00");
						// timestampAttribute.Value = timestampAttribute.Value.ToString();

						// Get current value
						//DateTime timestamp = DateTime.MinValue;
						//if(timestampAttribute != null && timestampAttribute.Value != null) {
						//    if(DateTime.TryParse(timestampAttribute.Value, out timestamp)) {
						//        TimeSpan oldnessOfData = DateTime.Now - timestamp;
						//        //double expireAfterThisManyMinutes = 600;
						//        double expireAfterThisManyMinutes = 2; // test value
								
						//        // Wreck the timestamp if the data is expired
						//        if(oldnessOfData.TotalMinutes > expireAfterThisManyMinutes) {
						//            timestampAttribute.Value = "EXPIRED:" + timestampAttribute.Value;
						//        }
						//    }
						//}

						
						//// DEBUG ATTRIBUTE
						//string debugString = xmlTime.Year.ToString() + "-" + varMonth + "-" + varDay + "T" + varHour + ":" + varMinutes + ":" + varSeconds + ".0000000-05:00";
						//XmlAttribute debugAttribute = xmlDoc.CreateAttribute("debug");
						//debugAttribute.Value = debugString;
						//node.Attributes.Append(debugAttribute);



					}

					// Remove all OP_UNIT nodes				
					if(node.Name.Equals("OP_UNIT", StringComparison.CurrentCultureIgnoreCase)) {
						nodesToRemove.Add(node);
					}

					// Remove STATE Nodes which don't have abbr attributes
					if(node.Name.Equals("STATE", StringComparison.CurrentCultureIgnoreCase)) {
						XmlAttribute abbrAttribute = (node.Attributes == null) ? null : node.Attributes["abbr"];
						if(abbrAttribute == null) {
							nodesToRemove.Add(node);
						}
					}
				}
			}

			// Remove the nodes by accessing the parent
			foreach(XmlNode nodeToRemove in nodesToRemove) {
				if(nodeToRemove != null && nodeToRemove.ParentNode != null) {
					nodeToRemove.ParentNode.RemoveChild(nodeToRemove);
				}
			}

			// Combine the children of OperatingCo nodes with the same "id"
			XmlNodeList opCoNodes = xmlDoc.SelectNodes("//OperatingCo");
			for(int i = 0; i < opCoNodes.Count; i++) {
				XmlNode opCoNode = opCoNodes[i];
				if(opCoNode != null) {
					string opCoID = (
							opCoNode.Attributes == null ||
							opCoNode.Attributes["id"] == null ||
							opCoNode.Attributes["id"].Value == null) ?
						"" :
						opCoNode.Attributes["id"].Value.Trim();


					XmlNodeList duplicateOpCoIDNodes = xmlDoc.SelectNodes("//OperatingCo[@id='" + opCoID + "']");
					// Take matched items 2 through n (skip first one b/c it's our original)
					// and append them to the original
					for(int j = 1; j < duplicateOpCoIDNodes.Count; j++) {
						XmlNode duplicateOpCoIDNode = duplicateOpCoIDNodes[j];
						// Take all of the child nodes and transfer them to our originAal
						foreach(XmlNode sameIDChildNode in duplicateOpCoIDNode.ChildNodes) {
							try {
								XmlNode orphanNode = duplicateOpCoIDNode.RemoveChild(sameIDChildNode);
								opCoNode.AppendChild(orphanNode);
							} catch { }
						}
						// Now get rid of the duplicate
						if(duplicateOpCoIDNode.ParentNode != null) {
							duplicateOpCoIDNode.ParentNode.RemoveChild(duplicateOpCoIDNode);
						}

					}
				}
			}

			// Combine incident nodes within a state node, which have the same county attribute
			XmlNodeList stateNodes = xmlDoc.SelectNodes("//state");
			foreach(XmlNode stateNode in stateNodes) {
				XmlNodeList stateIncidentNodes = stateNode.SelectNodes("incident");
				for(int i = 0; i < stateIncidentNodes.Count; i++) {
					XmlNode stateIncidentNode = stateIncidentNodes[i];
					string countyID = (
							stateIncidentNode.Attributes == null ||
							stateIncidentNode.Attributes["county"] == null ||
							stateIncidentNode.Attributes["county"].Value == null) ?
						"" :
						stateIncidentNode.Attributes["county"].Value;

					XmlNodeList duplicateCountyIDNodes = stateNode.SelectNodes("incident[@county='" + countyID + "']");
					// Take matched items 2 through n (skip first one b/c it's our original)
					// and ADD them to the original
					XmlAttribute originalCustomersAffectedAttribute = stateIncidentNode.Attributes == null ? null : stateIncidentNode.Attributes["customers_affected"];

					for(int j = 1; j < duplicateCountyIDNodes.Count; j++) {
						// Get the duplicate's values
						XmlNode duplicateCountyIDNode = duplicateCountyIDNodes[j];
						//XmlAttribute duplicateRepairIssuesAttribute = duplicateCountyIDNode.Attributes == null ? null : duplicateCountyIDNode.Attributes["repair_issues"];
						XmlAttribute duplicateCustomersAffectedAttribute = duplicateCountyIDNode.Attributes == null ? null : duplicateCountyIDNode.Attributes["customers_affected"];
						//XmlAttribute duplicateCustomersServedAttribute = duplicateCountyIDNode.Attributes == null ? null : duplicateCountyIDNode.Attributes["customers_served"];


						if(originalCustomersAffectedAttribute != null && duplicateCustomersAffectedAttribute != null) {
							int originalCustomersAffected = 0;
							if(!Int32.TryParse(originalCustomersAffectedAttribute.Value, out originalCustomersAffected)) {
								originalCustomersAffected = 0;
							}
							int duplicateCustomersAffected = 0;
							if(!Int32.TryParse(duplicateCustomersAffectedAttribute.Value, out duplicateCustomersAffected)) {
								duplicateCustomersAffected = 0;
							}
							// Add the duplicate amount and resave
							originalCustomersAffected += duplicateCustomersAffected;
							originalCustomersAffectedAttribute.Value = originalCustomersAffected.ToString();
						}

						// Now get rid of the duplicate
						if(duplicateCountyIDNode.ParentNode != null) {
							duplicateCountyIDNode.ParentNode.RemoveChild(duplicateCountyIDNode);
						}

					}
				}
			}

			// Modify XML if customers_affected > customers_served
			string impossibleCustomerAffectedRowHTML = "";
			int numberOfIncorrectIncidents = 0;

			XmlNodeList incidents = xmlDoc.SelectNodes("//incident");
			foreach(XmlNode incident in incidents) {
				if(incident.Attributes != null) {
					// CUSTOMERS SERVED
					int customersServed = 0;
					XmlAttribute customersServedAttribute = incident.Attributes["customers_served"];
					if(customersServedAttribute != null && customersServedAttribute.Value != null) {
						if(!Int32.TryParse(customersServedAttribute.Value, out customersServed)) {
							customersServed = 0;
						}
					}
					// CUSTOMERS AFFECTED
					int customersAffected = 0;
					XmlAttribute customersAffectedAttribute = incident.Attributes["customers_affected"];
					if(customersAffectedAttribute != null && customersAffectedAttribute.Value != null) {
						if(!Int32.TryParse(customersAffectedAttribute.Value, out customersAffected)) {
							customersAffected = 0;
						}
					}
					// If # customers affected is greater than # served, set equal and notify of data error
					if(customersAffected > customersServed) {
						if(customersAffectedAttribute != null) {
							customersAffectedAttribute.Value = customersServed.ToString();
						}

						// Record this incorrect incident
						numberOfIncorrectIncidents++;

						string state = (
							incident.ParentNode == null ||
							incident.ParentNode.Attributes == null ||
							incident.ParentNode.Attributes["abbr"] == null ||
							incident.ParentNode.Attributes["abbr"].Value == null) ? "" :
							incident.ParentNode.Attributes["abbr"].Value;


						XmlAttribute countyAttribute = incident.Attributes["county"];
						string county = (countyAttribute == null || countyAttribute.Value == null) ? "" : countyAttribute.Value;

						impossibleCustomerAffectedRowHTML += @"
	<tr>
		<td>" + state + @"</td>	
		<td>" + county + @"</td>
		<td>" + customersAffected.ToString() + @"</td>
		<td>" + customersServed.ToString() + @"</td>
	</tr>
";
					}
				}
			}

			// Determine whether to send error email
			if(numberOfIncorrectIncidents > 0) {
				string errorHTML = @"
<p>There were " + numberOfIncorrectIncidents.ToString() + " incorrect incident" + ((numberOfIncorrectIncidents == 1) ? "" : "s") + @" found in the XML data.</p>
<p>
	The following table represents counties that had customer affected numbers that were impossible.
	In all cases were customers affected > customers served, the customers served value was used.
</p>
<table class='tbl'>
	<thead>
		<tr>
			<th>State</th>		
			<th>County</th>
			<th>Customers Affected (from XML, not reported)</th>
			<th>Customers Served</th>			
		</tr>		
	</thead>	
" + impossibleCustomerAffectedRowHTML + @"
</table>
";
				// SEND THE ERROR EMAIL
				string subject = "AEPCustomer.com Outage Data Out of Bounds";
				if(CurrentEnvironment == EnvironmentType.Production) {
					SendErrorEmail("jbutley@aep.com, deazusenis@aep.com, jbthirumalaiappan@aep.com, dfkrumel@aep.com, makelawala@aep.com", (subject + " [PROD]"), errorHTML);
				} else {
					SendErrorEmail("deazusenis@aep.com", (subject + " [NON-PROD]"), errorHTML);
				}
			}

			// Set the xml from the modified xmlDoc
			xml = xmlDoc.OuterXml;
		} catch {
			// Problem - display xml for flash to read
			xml = GetTechnicalDifficultyXML();
		}

		return xml;
	}
	public enum EnvironmentType {
		NotSet,
		Localhost,
		Development,
		Test,
		Production,
        Azure
	}

    public static class JSon
    {
        public static string XmlToJSON(string xml)
        {
            XmlDocument doc = new XmlDocument();
            doc.LoadXml(xml);

            return XmlToJSON(doc);
        }
        public static string XmlToJSON(XmlDocument xmlDoc)
        {
            StringBuilder sbJSON = new StringBuilder();
            sbJSON.Append("{ ");
            XmlToJSONnode(sbJSON, xmlDoc.DocumentElement, true);
            sbJSON.Append("}");
            return sbJSON.ToString();
        }

        //  XmlToJSONnode:  Output an XmlElement, possibly as part of a higher array
        private static void XmlToJSONnode(StringBuilder sbJSON, XmlElement node, bool showNodeName)
        {
            if (showNodeName)
                sbJSON.Append("\"" + SafeJSON(node.Name) + "\": ");
            sbJSON.Append("{");
            // Build a sorted list of key-value pairs
            //  where   key is case-sensitive nodeName
            //          value is an ArrayList of string or XmlElement
            //  so that we know whether the nodeName is an array or not.
            SortedList<string, object> childNodeNames = new SortedList<string, object>();

            //  Add in all node attributes
            if (node.Attributes != null)
                foreach (XmlAttribute attr in node.Attributes)
                    StoreChildNode(childNodeNames, attr.Name, attr.InnerText);

            //  Add in all nodes
            foreach (XmlNode cnode in node.ChildNodes)
            {
                if (cnode is XmlText)
                    StoreChildNode(childNodeNames, "value", cnode.InnerText);
                else if (cnode is XmlElement)
                    StoreChildNode(childNodeNames, cnode.Name, cnode);
            }

            // Now output all stored info
            foreach (string childname in childNodeNames.Keys)
            {
                List<object> alChild = (List<object>)childNodeNames[childname];
                if (alChild.Count == 1)
                    OutputNode(childname, alChild[0], sbJSON, true);
                else
                {
                    sbJSON.Append(" \"" + SafeJSON(childname) + "\": [ ");
                    foreach (object Child in alChild)
                        OutputNode(childname, Child, sbJSON, false);
                    sbJSON.Remove(sbJSON.Length - 2, 2);
                    sbJSON.Append(" ], ");
                }
            }
            sbJSON.Remove(sbJSON.Length - 2, 2);
            sbJSON.Append(" }");
        }

        //  StoreChildNode: Store data associated with each nodeName
        //                  so that we know whether the nodeName is an array or not.
        private static void StoreChildNode(SortedList<string, object> childNodeNames, string nodeName, object nodeValue)
        {
            // Pre-process contraction of XmlElement-s
            if (nodeValue is XmlElement)
            {
                // Convert  <aa></aa> into "aa":null
                //          <aa>xx</aa> into "aa":"xx"
                XmlNode cnode = (XmlNode)nodeValue;
                if (cnode.Attributes.Count == 0)
                {
                    XmlNodeList children = cnode.ChildNodes;
                    if (children.Count == 0)
                        nodeValue = null;
                    else if (children.Count == 1 && (children[0] is XmlText))
                        nodeValue = ((XmlText)(children[0])).InnerText;
                }
            }
            // Add nodeValue to ArrayList associated with each nodeName
            // If nodeName doesn't exist then add it
            List<object> ValuesAL;

            if (childNodeNames.ContainsKey(nodeName))
            {
                ValuesAL = (List<object>)childNodeNames[nodeName];
            }
            else
            {
                ValuesAL = new List<object>();
                childNodeNames[nodeName] = ValuesAL;
            }
            ValuesAL.Add(nodeValue);
        }

        private static void OutputNode(string childname, object alChild, StringBuilder sbJSON, bool showNodeName)
        {
            if (alChild == null)
            {
                if (showNodeName)
                    sbJSON.Append("\"" + SafeJSON(childname) + "\": ");
                sbJSON.Append("null");
            }
            else if (alChild is string)
            {
                if (showNodeName)
                    sbJSON.Append("\"" + SafeJSON(childname) + "\": ");
                string sChild = (string)alChild;
                sChild = sChild.Trim();
                sbJSON.Append("\"" + SafeJSON(sChild) + "\"");
            }
            else
                XmlToJSONnode(sbJSON, (XmlElement)alChild, showNodeName);
            sbJSON.Append(", ");
        }

        // Make a string safe for JSON
        private static string SafeJSON(string sIn)
        {
            StringBuilder sbOut = new StringBuilder(sIn.Length);
            foreach (char ch in sIn)
            {
                if (Char.IsControl(ch) || ch == '\'')
                {
                    int ich = (int)ch;
                    sbOut.Append(@"\u" + ich.ToString("x4"));
                    continue;
                }
                else if (ch == '\"' || ch == '\\' || ch == '/')
                {
                    sbOut.Append('\\');
                }
                sbOut.Append(ch);
            }
            return sbOut.ToString();
        }
    }
</script>

