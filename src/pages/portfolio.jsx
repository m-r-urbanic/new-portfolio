export default function portfolio() {
    return (
        <div>
            <section id="my-work">
            <h3>My Work</h3>
            <figure class="main-image">
                <div class="img-holder-2">
                    <a href="https://robsprouse.github.io/Gaming-Holidays/">
                        <img src="./assets/images/projectOne.png" alt="The image shows a webpage titled 'Gaming Holidays'. It has navigation at the top, a side column that allows a wishlist, and a list of games."/>
                    </a>
                <h4>Gaming Holidays</h4>
                <p>CSS/HTML/JS</p>
                </div>
            </figure>
            <figure class="work-rows">
                <div class="img-holder">
                    <a href="https://www.pexels.com/photo/a-laptop-and-calculator-on-a-wooden-table-6963055/">
                        <img class="sub-img" src="./assets/images/calculator.jpg" alt="A black calculator sits on top of a laptop, which is on top of a desk. When the mouse hovers over the image, the image gets brighter." />
                    </a>
                    <h4>Calculator Application</h4>
                    <p>HTML/CSS/JavaScript</p>
                </div>
                <div class="img-holder">
                    <a href="https://www.pexels.com/photo/waxing-moon-crescent-in-black-night-sky-18051705/">
                        <img class="sub-img" src="./assets/images/moon.jpg" alt="Half of a moon is visable on a black background. When the mouse hovers over the image, the image gets brighter." />
                    </a>
                    <h4>Moon Phases</h4>
                    <p>MERN Stack</p>
                </div>
            </figure>
            <figure class="work-rows">
                <div class="img-holder">
                    <a href="https://www.pexels.com/photo/person-holding-map-inside-vehicle-2705756/">
                        <img class="sub-img" src="./assets/images/map.jpg" alt="A finger is pointing at an island map that has various locations marked on it. When the mouse hovers over the image, the image gets brighter." />
                    </a>
                    <h4>Gas Station Finder</h4>
                    <p>MERN Stack</p>
                </div>
                <div class="img-holder">
                    <a href="https://www.pexels.com/photo/body-of-water-beside-beach-sand-386148/">
                        <img class="sub-img" src="./assets/images/tides.jpg" alt="The image shows waves crashing onto a shoreline. The ocean is at the top of the photo, and the sand is at the bottom. When the mouse hovers over the image, the image gets brighter."/>
                    </a>
                    <h4>Tide Tracker</h4>
                    <p>Node</p>
                </div>
            </figure>
        </section>
        </div>
    );
}