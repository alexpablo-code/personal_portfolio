import {useState} from 'react';

const Tools = () => {
    const [tools, setTools] = useState(['Javascript', 'Python', 'HTML', 'CSS', 'React.js', 'Express.js', 'Bootstrap', 'MongoDB', 'MySQL', 'Git', 'Github']);


    return (
        <section className='darkSection toolsSection'>
            <div className='toolsBox'>
                <h3>Languages & Tools</h3>
                <div className='toolsGrid'>
                    {
                        tools.map(tool => (
                            <h6>{tool}</h6>
                        ))
                    }

                </div>
            </div>
        </section>
    );
}

export default Tools;
