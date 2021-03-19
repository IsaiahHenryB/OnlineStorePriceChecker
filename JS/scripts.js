let item = prompt("What item would you like?")
let itemPrice = Number(prompt(`How much is the ${item}?`))
let blackFriday = prompt("Is it Black Friday? Please answer yes or no")

    let fridayDiscount = 0
    let fridayMsg = ""
switch (blackFriday){
    case "yes":
    case "Yes":
        fridayDiscount = itemPrice * .25
        fridayMsg = `Since it's Black Friday we subtracted 25% which is $${fridayDiscount.toFixed(2)} from the price.`
        break;

    case "no":
    case "No":
        fridayDiscount = 0
        fridayMsg = ""
        break;

    default:
        break;
    }

let searchEngine = prompt("Did you use a search engine to find us? Please answer yes or no")

    let searchPrice = 0
    let searchMsg = ""
switch (searchEngine){
    case "yes":
    case "Yes":
        searchPrice = itemPrice * .01
        searchMsg = `Since you found us through a search engine we added 1% which is $${searchPrice.toFixed(2)} to the price.`
        break;

    case "no":
    case "No":
        searchPrice = 0
        searchMsg = ""
        break;

    default:
        break;
    }

let siteExt = prompt("Did you use a comparison site before you came here? Please answer yes or no")

    let sitePrice = 0
    let siteMsg = ""
switch (siteExt){
    case "yes":
    case "Yes":
        sitePrice = itemPrice * .10
        siteMsg = `Since you were on another site we subtracted 10% which is $${sitePrice.toFixed(2)} from the price.`
        break;

    case "no":
    case "No":
        sitePrice = 0
        siteMsg = ""
        break;

    default:
        break;
    }

    let finalPrice = (itemPrice - fridayDiscount - sitePrice + searchPrice).toFixed(2)

    let message = `You ordered ${item} for $${itemPrice.toFixed(2)}. ${fridayMsg} ${searchMsg} ${siteMsg} This brings you to a grand total of $${finalPrice}!`

    document.getElementById("message").innerHTML = message