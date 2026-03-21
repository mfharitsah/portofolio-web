import Game from '../components/Game';

export const metadata = {
  title: 'Trivia Game',
  description: 'Interactive trivia game challenge',
};

export default function GamePage() {
  return (
    <main>
      <Game />
    </main>
  );
}
