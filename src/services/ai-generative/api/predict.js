import { PredictionServiceClient, helpers } from '@google-cloud/aiplatform';

const clientOptions = {
    apiEndpoint: 'us-central1-aiplatform.googleapis.com',
};

// Alterado para o modelo de chat
const publisher = 'google';
const model = 'chat-bison@001';
const project = process.env.GOOGLE_CLOUD_PROJECT_ID;
const location = 'us-central1';

const predictionServiceClient = new PredictionServiceClient(clientOptions);

async function predict(chatRequest) {
    const endpoint = `projects/${project}/locations/${location}/publishers/${publisher}/models/${model}`;

    // Refatorado para a estrutura de solicitação de chat
    const prompt = {
        context: chatRequest.context,
        examples: chatRequest.examples,
        messages: chatRequest.messages
    };

    const instanceValue = helpers.toValue(prompt);
    const instances = [instanceValue];

    const parameter = {
        temperature: 0.2,
        maxOutputTokens: 256,
        topP: 0.95,
        topK: 40,
    };
    const parameters = helpers.toValue(parameter);

    const request = {
        endpoint,
        instances,
        parameters,
    };

    try {
        const [response] = await predictionServiceClient.predict(request);
        return response.predictions;
    } catch (error) {
        throw new Error(`Error during prediction: ${error.message}`);
    }
}

export default predict;
