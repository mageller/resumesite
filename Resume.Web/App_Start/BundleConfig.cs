using System.Web.Optimization;
using Resume.Web.Infrastructure;

namespace Resume.Web
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                "~/Scripts/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                "~/Scripts/jquery.unobtrusive*",
                "~/Scripts/jquery.validate*"));

            // bundle for javascriptcart
            bundles.Add(new ScriptBundle("~/bundles/jscart").Include(
                "~/Scripts/knockout-{version}.js",
                "~/Scripts/app/cart.js"
                ));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                "~/Scripts/modernizr-*"));

            // bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css"));
            var lessBundle = new Bundle("~/Content/css");
            lessBundle.Include("~/Content/less/reset.less",
                "~/Content/less/styles.less"
                );
            lessBundle.Transforms.Add(new LessTransform());
            lessBundle.Transforms.Add(new CssMinify());

            bundles.Add(lessBundle);
        }
    }
}