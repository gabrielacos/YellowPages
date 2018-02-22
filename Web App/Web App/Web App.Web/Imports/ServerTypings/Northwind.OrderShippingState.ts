namespace Web_App.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnum(OrderShippingState, 'Northwind.OrderShippingState');
}

