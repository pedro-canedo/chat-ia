export type OpenAIModel = 'gpt-3.5-turbo' | 'gemni';

export interface ChatBody {
  inputCode: string;
  model: OpenAIModel;
  apiKey?: string | undefined;
}
