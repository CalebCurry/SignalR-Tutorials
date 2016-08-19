using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CTVM2App.Startup))]
namespace CTVM2App
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
            ConfigureAuth(app);
        }
    }
}
