import OpenAI from "../../../node_modules/openai";

const openai = new OpenAI();

async function tryai() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
    });

    //console.log(completion.choices[0]);
    wrapper.html("Now inside tryai function");
    wrapper.html(completion.choices[0])
}

window.tryai = tryai;

sofia.initMethods.push(function () {
    sofia.globaltryai = new tryai();
});
