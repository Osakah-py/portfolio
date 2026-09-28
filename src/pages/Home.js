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
                    link={cat.link}
                    id={cat.id}
                    image={cat.image} />
            )}
        </div>
    )
}

export default Home