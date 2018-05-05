import {ShoesController} from "./controller/ShoesController";

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
}
];