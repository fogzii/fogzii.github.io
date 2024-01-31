import React, {Component} from "react";
import Title from "./Title";
// import List from "./List";

const posts = [{
    id: "0",
    description: "test 1",
    imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
    "3919321_1443393332_n.jpg"
    }, {
    id: "1",
    description: "test 2",
    imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
    }, {
    id: "2",
    description: "test 3",
    imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
}]

class Main extends Component {
    render() {
        return (
            <div>
                <Title title = {'Time to BeReal'}/>
            </div>
        )
    }
}

export default Main;