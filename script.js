const gradientPreview = document.getElementById('gradientPreview');
const generateBtn = document.getElementById('generateBtn');
const cssCode = document.getElementById('cssCode');
const copyBtn = document.getElementById('copyBtn');

function getRandomColor() {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + hex.padStart(6, '0');
}

function generateGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const color3 = getRandomColor();
    const angle = Math.floor(Math.random() * 360);
    
    const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2}, ${color3})`;
    
    gradientPreview.style.background = gradient;
    cssCode.textContent = `background: ${gradient};`;
}

function copyCSS() {
    const css = cssCode.textContent;
    navigator.clipboard.writeText(css).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.classList.add('copied');
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.classList.remove('copied');
        }, 2000);
    });
}

generateBtn.addEventListener('click', generateGradient);
copyBtn.addEventListener('click', copyCSS);
