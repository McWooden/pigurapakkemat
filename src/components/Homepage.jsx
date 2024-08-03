import Base from "./Base";
import LinkTree from "./LinkTree";
import Products from "./Products";

export default function Homepage() {
    return <div className="flex flex-col items-center">
    <Base>
        <LinkTree/>
    </Base>
    <Products/>
    </div>
}