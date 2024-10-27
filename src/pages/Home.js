import Header from '../component/Header';
import CategoryPresentation from '../component/CategoryPresentation';

import { categoryContent } from "../data/categoryContent";

function Home() {
    return (
        <div>
            <Header />
            {categoryContent.map((cat) =>
                <CategoryPresentation
                    name={cat.name}
                    description={cat.description}
                    button={cat.button}
                    id={cat.id} />
            )}
        </div>
    )
}

export default Home