import Faq from "../Faq/Faq"
import IllustrativePicture from "../IllustrativePicture/IllustrativePicture"
import '../Layout/Layout.css';
import Box from "../Box/Box";

export default function Layout () {
    return (
        <div className="Layout">
            <IllustrativePicture />
            <Box />
            <Faq />
        </div>
    )
}
