
import Hero from "../Hero";
import Preview from "../Preview";
import Form from "../Form";

function CreatePage({ projectData, setProjectData }) {

    return (

        <main className="main">
            <Hero />

            <div className="createPage">
                <Preview projectData={projectData} />
                <Form projectData={projectData} setProjectData={setProjectData} />

            </div>

        </main>

    )
}

export default CreatePage;