using dotless.Core;
using System.Web.Optimization;

namespace Resume.Web.Infrastructure
{
    public class LessTransform : IBundleTransform
    {
        public void Process(BundleContext context, BundleResponse response)
        {
            response.Content = Less.Parse(response.Content);
            response.ContentType = "text/css";
        }
    }
}