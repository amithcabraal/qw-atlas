export interface Player {
  id: string;
  initials: string;
  gameId: string;
  score: number;
  hasAnswered: boolean;
}

export interface Game {
  id: string;
  code: string;
  status: 'waiting' | 'playing' | 'revealing' | 'finished';
  currentQuestion: number;
  hostId: string;
}

export interface Answer {
  id: string;
  playerId: string;
  gameId: string;
  questionId: number;
  latitude: number;
  longitude: number;
  distance: number;
  score: number;
}

export interface Question {
  id: number;
  text: string;
  latitude: number;
  longitude: number;
  hint?: string;
  image?: string;
}