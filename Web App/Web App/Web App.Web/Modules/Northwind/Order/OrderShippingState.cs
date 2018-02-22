
namespace Web_App.Northwind
{
    using Serenity.ComponentModel;
    using System.ComponentModel;

    [EnumKey("Northwind.OrderShippingState")]
    public enum OrderShippingState
    {
        [Description("Not Shipped")]
        NotShipped = 0,
        [Description("Shipped")]
        Shipped = 1
    }
}