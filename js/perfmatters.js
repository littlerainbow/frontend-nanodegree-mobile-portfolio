// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp
function logCRP(){var o=window.performance.timing,n=o.domContentLoadedEventStart-o.domLoading,t=o.domComplete-o.domLoading,d=document.getElementById("crp-stats");d.textContent="DCL: "+n+"ms, onload: "+t+"ms"}window.addEventListener("load",function(o){logCRP()});
(function(w,g){w['GoogleAnalyticsObject']=g;
w[g]=w[g]||function(){(w[g].q=w[g].q||[]).push(arguments)};w[g].l=1*new Date();})(window,'ga');

// TODO: replace with your Google Analytics profile ID.
ga('create', 'UA-XXXX-Y');
ga('send', 'pageview');