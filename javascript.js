// CHAT

var $user = "Benjamin"
var $form = $("#message-form");
var $input = $form.find('input[name=message]');
var $historique = $("#historique");

$form.on("submit", function (event) {
    event.preventDefault();

    if (func_write() == -1) {
        return -1
    }
    func_scroll();

    func_response();
    func_scroll();
});

function func_write() {
    var msg = $input.val();
    if (msg.trim() === "") return -1;

    var message = __build_message($user, msg)

    $historique.append(message);
    $input.val('');

    $input.prop("disabled", true);
}

function func_scroll() {
    $("#historique").animate({
        scrollTop: $historique[0].scrollHeight
    });
}

function __build_message(author, content) {
    message = $('<div class="message"></div>');
    message.append($("<h4>", {
        text: author + " " + new Date().toString().split(' ')[4]
    }))
    message.append($("<p>", {
        text: func_emoji(content)
    }));
    return message
}

const delay = ms => new Promise(res => setTimeout(res, ms));

function random_delay(min, max) {
    return Math.random() * (max - min) + min;
}

const func_response = async () => {
    await delay(random_delay(700, 1000))
    message = __build_message("Bot", "Je te réponds :)")
    $historique.append(message)

    $input.prop("disabled", false);
    $input.focus()
}

// EMOJIS

var emojis = $("#message-form");

$(document).ready(

)

function func_emoji(text) {
    for (emo in $liste_emojis) {
        text = text.replaceAll(emo, $liste_emojis[emo])
    }
    return text
}

const $liste_emojis = {
    ':heart:': "❤️"
    , ':reversed:': '🙃'
    , ':thumb:': '👍'
    , ':ok:': '👌'
    , ':shrug:': '🤷‍♂️'
};