import './stories.css';

export default {
  title: 'Button'
};

export const withText = () => '<button class="btn">Ik ben een blije button!</button>';

export const withEmoji = () => {
  const button = document.createElement('button');
  button.innerText = '😀 😎 👍 💯';
  return button;
};