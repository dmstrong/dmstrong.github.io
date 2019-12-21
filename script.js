const devthadude = document.querySelector('.devthadude')
devthadude.textContent = `Hi, I'm Derrick!`;
devthadude.classList.add('animated', 'hinge')
devthadude.style.animationDuration = '2s'
devthadude.style.animationDelay = '4s'

const handleAnimationEnd = () => {
    const header = document.querySelector('#header');
    const container = document.querySelector(".container")
    container.innerHTML = `
    <div>
        <h4>Below are a few of my starter projects:</h4>
        <ul>
            <li>
            <a href="https://dmstrong.github.io/simplelist/" target="_blank">Simple List/Todo app feat. localStorage</a
            >
            </li>
            <li>
            <a href="https://dmstrong.github.io/todoapp/" target="_blank">React Todo app feat. React Context and Hooks</a>
            </li>
        </ul>
      </div>`

    container.classList.add('animate', 'jackInTheBox')
    container.style.animationDuration = '2s';

    // I ❤️ Coding
    // const beatingheart = document.createElement('p')
    // beatingheart.innerText = 'I ❤️ Coding';
    // beatingheart.classList.add('animated', 'heartBeat');
    // beatingheart.style.fontSize = '1.5em';
    // beatingheart.style.animationDuration = '3s';
    // beatingheart.style.animationIterationCount = 'infinite';


    const newHeader = document.createElement('h5')
    newHeader.innerHTML = `Check back soon for more code examples. <br /><br /> Happy C<div style="font-size:.6em; display:inline;">❤️</div>ding! - Dev Tha Dude`;
    newHeader.classList.add('animated', 'fadeInUpBig')
    newHeader.style.animationDuration = '2s';
    newHeader.style.animationDelay = '2s';
    
    // Append and Replace
    container.appendChild(newHeader)
    header.removeChild(header.childNodes[1])
    container.appendChild(beatingheart)
}

devthadude.addEventListener('animationend', handleAnimationEnd)