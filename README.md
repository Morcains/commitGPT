# commitGPT
Proof of concept project: using ChatGPT's API to automatically create commit messages.

# Warning!
This implementation will send the data of **git diff --staged** to OpenAI servers. If you do not wish to share your code to this external party <u>**DO NOT USE THIS SCRIPT**</u>.

As this is only a proof of concept a lot more error handling would be needed for this to become a viable solution.

# Installation
## Prerequisite
You'll need an **OpenAI API token** and credits for this git hook to work. Please follow [OpenAI's quickstart guide](https://platform.openai.com/docs/quickstart?context=curl).

## Setup
Add the **prepare-commit-msg** script to your **.git/hooks** directory.

Update the variable **OPENAI_API_KEY** to use your API token. Please note that this could be set externally, for instance in your **.bashrc** file. If doing so remember to remove the variable from the hook script so that it does not overwrite it.

# Example usage
In this sample project we have a basic NodeJS/Express API with a single route. Let's add a route to show datetime:
```javascript
app.get('/time', (req, res) => {
    res.send(`${new Date().toString().replace(/T/, ':').replace(/\.\w*/, '')}`)
})
```

Now let's add the code:
```bash
git add .
git commit
```
Note that we're not using '-m' for git commit. The **prepare-commit-msg** script will generate a draft for us.

I'm prompted with the follow commit messsage that I can edit before saving:
```
Add route for getting current time on '/time' endpoint
```

It's as simple as that!

# Tweaking
There are of course parameters we could tweak for this automated git commit message hook, just to name a few:
* **model:** which GPT model to use
* **system role description:** the description to the model of what role it should have
* **instuction prompt:** the description to the model of the task we want it to perform