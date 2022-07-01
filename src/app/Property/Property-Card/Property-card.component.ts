import { Component } from "@angular/core";

@Component({
    selector:'app-property-card',
    templateUrl:'Property-card.component.html',
    styleUrls:['Property-card.component.scss']
})
export class PropertyCardComponent{
    property:any = {
        name:"abc",
        type:"xyz",
        price:"1200"
    }
}