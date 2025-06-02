const canvas = document.getElementById('greetingCanvas');
const ctx = canvas.getContext('2d');
const baseImage = new Image();
baseImage.src = 'ITQAN_eidadha.jpeg';

const renderImage = (name = '') => {
    const drawImageWithName = (name = '') => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
        ctx.font = 'bold 36px Cairo';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText(name, canvas.width / 2, 1280); // Adjust Y as needed
      };
      
      baseImage.onload = () => {
        drawImageWithName();
      };
      
      document.getElementById('nameInput').addEventListener('input', e => {
        drawImageWithName(e.target.value);
      });
};

document.getElementById('nameInput').addEventListener('input', e => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  renderImage(e.target.value);
});

const downloadImage = () => {
    const name = document.getElementById('nameInput').value.trim() || 'eid-greeting';
    const link = document.createElement('a');
    link.download = `${name}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

renderImage(); // Initial render