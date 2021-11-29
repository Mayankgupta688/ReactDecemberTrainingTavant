import { HeaderComponent } from "../components/HeaderComponent";
import { ContentComponent } from "../components/ContentComponent";
import { FooterComponent } from "../components/FooterComponent";

export function MainComponent() {

    var userName = "Mayank Gupta";

    function getData() {
        return "TechnoFunnel"
    }

    return (
        <div>
            <h1>This is Main Container Component for { getData() }</h1><hr/>
            <HeaderComponent></HeaderComponent><hr/>
            <div className="content_class">
                <ContentComponent></ContentComponent>
            </div>
            <FooterComponent></FooterComponent><hr/>
        </div>
    ) 
}