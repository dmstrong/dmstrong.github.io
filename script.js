const devthadude = document.querySelector('.devthadude')
devthadude.textContent = `Hi, I'm Derrick!`;
devthadude.classList.add('animated', 'hinge')
devthadude.style.animationDuration = '2s'
devthadude.style.animationDelay = '3s'

const handleAnimationEnd = () => {
    const header = document.querySelector('#header');
    const container = document.querySelector(".container")
    container.innerHTML = `
    <div>
        <h4>Check out some of my projects:</h4>
        <ul>
            <li>
            <a href="https://dmstrong.github.io/gatsby-markdown/" target="_blank">Gatbsy Blog feat. Markdown</a>
            </li>
            <li>
            <a href="https://dmstrong.github.io/big2/" target="_blank">BIG II (JS Piano app)</a>
            </li>
            <li>
            <a href="https://dmstrong.github.io/simplelist/" target="_blank">Simple List/Todo app feat. localStorage</a
            >
            </li>
            <li>
            <a href="https://dmstrong.github.io/todoapp/" target="_blank">React Todo app feat. React Context and Hooks</a>
            </li>
            <li>
            <a href="https://dmstrong.github.io/superfriends/" target="_blank">Vue.js app (Super Friends)</a>
            </li>
        </ul>
      </div>`;

    container.classList.add('animate', 'jackInTheBox')
    container.style.animationDuration = '2s';

    const newHeader = document.createElement('div')
    newHeader.innerHTML = `<h4>Need a Dev?</h4> <p>Contact me on Twitter <a href="https://twitter.com/_DevthaDude_" target="_blank">@_devthadude_</a> </p> <h5>Happy C❤️ding! - D.Strong</h5>`;
    newHeader.classList.add('animated', 'fadeInUpBig')
    newHeader.style.animationDuration = '2s';
    newHeader.style.animationDelay = '2s';
    newHeader.style.marginTop = '50px';
    
    // Append and Replace
    container.appendChild(newHeader)
    header.removeChild(header.childNodes[1])
    container.appendChild(beatingheart)
}

devthadude.addEventListener('animationend', handleAnimationEnd)