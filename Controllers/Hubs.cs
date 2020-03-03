using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace SignalRDemoApp.Controllers
{
    public class Hubs : Hub
    {
        public Task SendMessage(string message, string payload)
        {
            return Clients.All.SendAsync("UPDATE_COUNT", payload);
        }
        public Task TestConnection()
        {
            //            return  Clients.All.SendAsync("TestConnection", "connection successful");
            return Clients.All.SendAsync("UPDATE_COUNT", "200");

        }
    }
}
