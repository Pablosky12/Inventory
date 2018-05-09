import {ShoesController} from "./controller/ShoesController";
import {BrandsController} from "./controller/BrandsController";
import {OperationsController} from "./controller/OperationsController";

export const Routes = [{
    method: "get",
    route: "/shoes",
    controller: ShoesController,
    action: "all"
}, {
    method: "get",
    route: "/shoes/:id",
    controller: ShoesController,
    action: "one"
}, {
    method: "post",
    route: "/shoes",
    controller: ShoesController,
    action: "addOrUpdate"
}, {
    method: "delete",
    route: "/shoes/:id",
    controller: ShoesController,
    action: "remove"
},{
    method: "get",
    route: "/shoes/brand/:id",
    controller: ShoesController,
    action: "getByBrand"
}, {
    method: "get",
    route: "/brand",
    controller: BrandsController,
    action: "getBrands"
}, {
    method: "get",
    route: "/operations",
    controller: OperationsController,
    action: "all"
}, {
    method: "get",
    route: "/operations/:type",
    controller: OperationsController,
    action: "byType"
}, {
    method: "post",
    route: "/operations",
    controller: OperationsController,
    action: "addOrEdit"
},{
    method: "delete",
    route: "/operations/:id",
    controller: OperationsController,
    action: "remove"
}

];