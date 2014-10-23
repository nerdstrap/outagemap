<form name="aspnetForm" method="post" action="IFrameResizer.aspx" id="aspnetForm">
    <span>
        <script type="text/javascript">
            //<!--
            function outageMapOnLoad() {
                if (console) { console.log("outageMapOnLoad"); }
                var params = window.location.search.substring(1).split('&');
                var height;
                var forceResize = false;
                for (var i = 0, l = params.length; i < l; ++i) {
                    var parts = params[i].split('=');
                    switch (parts[0]) {
                        case 'height':
                            height = parseInt(parts[1]);
                            break;
                        case 'forceResize':
                            forceResize = parts[1] == "1"
                            break;
                    }
                }
                if (typeof (height) == 'number') {
                    var adjustment = 32; // 1em
                    //var adjustment = 8; // 0.5em
                    var adjustedHeight = height + adjustment;

                    if ((window.parent.parent) && (window.parent.parent.resizeFrame)) {
                        if (console) { console.log("IFrameResizerControl. Adjusted height to resizeFrame(" + adjustedHeight + ")"); }
                        window.parent.parent.resizeFrame({ height: adjustedHeight, forceResize: forceResize });
                    }
                }
            }

            if (window.addEventListener) {
                // W3C standard
                window.addEventListener('load', outageMapOnLoad, false); // NOTE **not** 'onload'
            } else if (window.attachEvent) {
                // Microsoft
                window.attachEvent('onload', outageMapOnLoad);
            }

            // -->
        </script>
    </span>

</form>
