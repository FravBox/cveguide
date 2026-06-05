# Tools & Services

This page only lists the tools. View how to use them on the [Technicals](tech.md) page.

## Absolutely necessary

The event cannot run without these.

### Kollaborate.tv (Kollab)

[Kollab](https://kollaborate.tv) is the off-discord service used to actually run the event.

Features:    
- You can "request files," allowing people to upload directly to Kollab without seeing others' files
- Video streaming & downloading
- Video commenting & annotating (drawing)
- Share links to folders & videos
- Webhook integration

There are other services with similar features, but Kollaborate is only 7 USD a month (at the time of writing this) for  30GB, which is more than enough for most events. Their support has also been very attentive to me.

-# Note: You can [self-host Kollab server](https://www.kollaborate.tv/server) if you would prefer.

In theory, you may be able to do without Kollab and use unlisted Youtube videos, direct to discord uploads and a forum channel, or something similar. But this is less convenient than a dedicated video reviewing platform, and is likely not doable while maintaining a blindness.

### Website hosting (if you will be using Kollab webhooks)

Kollab offers webhook integration which allows comments on kollab videos to be posted to discord. If you want to use this, you will need a website host that supports PHP (which is basically all of them).

I personally use https://verpex.com shared hosting because it appears to be the cheapest.

### A forms service (for voting)

You will need a way to manage voting. What will work for your community depends on the type of voting you'd like to perform and the size of your community.

Here are some services I have found that have a serviceable free tier:    
- [Google Forms](https://forms.google.com)
- [QuestionPro](https://www.questionpro.com/features/) (200 responses)
- [PollUnit](https://pollunit.com/en/tutorials/advanced_poll_settings) (40 responses)
- [StrawPoll](https://strawpoll.com)
- [Tally.so](https://tally.so/)
- [Lark suite](https://www.larksuite.com/en_us/product/forms) (Google workspace alternative)
- [Zoho forms](https://www.zoho.com/forms/) (500 submissions - google workspace alternative)
- [Survey Monkey](https://www.surveymonkey.com) (10 questions / 25 responses)

I personally use a self-hosted solution called "Easy Forms."

https://easyforms.dev/ or https://codecanyon.net/item/easy-forms-advanced-form-builder-and-manager/14176957

It’s a one-time $30 payment and you host it yourself. Personally I would only recommend this option if you are technically inclined and can code a bit, or if your community has specific restraints, like needing complete customization, everything hosted locally, or no repeating costs.

It is a nightmare to update the software and I've never succeeded at doing it without losing data. Support is also not very good, and some very useful plugins require additional (one-time) purchases. The dashboard for viewing results data leaves a lot to be desired. 

However, the benefits are:
- One-time purchase
- Host it yourself
- Complete visual customization of the forms
- Extremely robust conditional formatting/logic branching
- Webhooks
- Extensive customization through JavaScript (if you can code)
- Mostly WYSIWYG interface for creating the forms
- Private custom data validation [(needs an extra plugin)](https://easyforms.dev/add-ons/custom-data-validation/)
  - Custom data validation in google forms is exposed so anyone who knows how to look for it can see all the regex options.

## Discord bots

It's possible to run the event without discord bots, but they make it much easier.

### Yet Another General Purpose Discord Bot (YAGPDB)

[YAGPDB](https://github.com/botlabs-gg/yagpdb) is an open-source discord bot that does basically everything. It has a very generous free tier and an extremely robust custom command system. 

BentoVid's "Avi" Bot is a self-hosted version of YAGPDB. 

Any time I need something a little custom, I write it using YAGPDB custom commands. There is a high learning curve and the support server is not very friendly. There are probably other bots you could use.

**What YAGPDB is used for**    
- Allowing thread OPs to control pins in their own threads
- Automation of handing out event-related roles
- Automation of posting & pinning some of the news messages

All of those uses are custom so in theory you could use any bot with a custom command system or create your own bot for these uses.

*Note: I don't have any custom commands here. You will have to learn how to do this yourself. Use [help.yagpdb.xyz](https://help.yagpdb.xyz) for the docs or [learn.yagpdb.xyz](https://learn.yagpdb.xyz) for their learning course, which is quite comprehensive!*

### Discohook (bot + website)

[Discohook.app](https://discohook.app) [(Github repo)](https://github.com/discohook/discohook) and its companion [discord bot](https://github.com/discohook/discohook/tree/main/packages/bot) are free and open-source tools that help you make discord messages without coding anything. 

The website is a WYSIWYG editor for embeds and components v2 messages. It will allow you to post through a webhook, make fancy-looking messages, and create buttons that do simple tasks. You can [find guides here.](https://discohook.app/guide)

In most cases, the bot is not required. You can do almost everything through the website. However, the bot will make some things more convenient.

**You can probably use Discohook by itself without the use of YAGPDB.**     
I use personally use both, as discohook is slightly more convenient for some types of messages.

**What Discohook is used for**    
- Creating messages with previews
- Posting through a webhook
- Creating messages with simple button functions
- Convenient message maintenance (on messages previously posted by Discohook)

**What is only possible through the bot:**     
- Creating buttons that do things other than open links
- Right clicking a message, selecting `Apps -> Discohook` and using any of the functions to quickly edit that message, its components, or send it back to the website (this is the "makes things more convenient" factor)

If you don't need either of those things, you can get by using only the website.

### An event bot - Sesh (for mini-events)

[Sesh](https://sesh.fyi/) is a bot used for events. You can create an event, and when people RSVP, they can get DMed notifications. You can also configure custom notifications posted to the channel.

**You can use any event bot. You don't need Sesh specifically.**

**What Sesh is used for:**    
- Easy event creation
- RSVPed personal reminders
- A thread is created when an event is created (optional)
- A list of upcoming events (auto-updating list is a premium-only feature)

The native discord event function may be enough for some communities, but it never pings anyone or posts reminders. Event bots are simply better in this regard.

A noteworthy alternative to Sesh is [Groupflows](https://www.groupflows.com/), which is both a website and a discord bot. It is an event manager like Sesh, but it is more focused on people putting in the times and days they are available and then making an event with that information.     
This is more beneficial than Sesh for smaller communities.

Also note: YAGPDB has a [built-in events system](https://help.yagpdb.xyz/docs/core/all-commands/#events-) you can try if you want to limit your bot use, but it is extremely limited.


## Physical awards

### Award Certificates (cards)

RICE Awards are 5x7 cards "giant size custom playing cards" printed at https://makeplayingcards.com. [Direct link to product](https://www.makeplayingcards.com/design/giant-size-custom-playing-cards.html).

This format was chosen specifically because this size counts as letter mail, can be sent from home with a simple postal stamp in the USA, is not usually folded when delivered, and will avoid customs and tariffs worldwide.

**Card sleeves / protectors**     
If you want to protect the cards during transit, they should be sleeved. I use both a soft sleeve and a hard sleeve.

Soft: "BCW 5x7 photo sleeves" or "5x7 soft sleeves."     
Hard: "5x7 toploader" can sometimes be found as "clear rigid photo protectors."

**Envelopes**     
For mailing only the card itself (and possibly card + soft sleeve), you can use an A7 size envelope.     
If you are mailing card + hard protective sleeve, you will need an A9 size envelope.

**Mailing costs**    
One card + protectors is about 1.5 ounces. You can go to the (US) post office and pay exactly, or buy forever stamps (which cover the first ounce) and "additional ounce" stamps. This is technically overpaying, but I like the convenience.

There are also 2 and 3 ounce stamps, however the heaviest weight a first class letter mail can have is 3.5 ounces. If someone wins more than 2 awards, I ship them in separate envelopes to remain classified as letter mail.

### Stickers

I design all my stickers for the year, save each image individually, and then try to fit all of them on the minimum amount of die cut sticker pages using https://stickeryou.com. [Direct link to product.](https://www.stickeryou.com/products/die-cut-sticker-pages/750)

I have not yet found an alternative that is both more affordable and not politically active...

## Other tools

### Data-driven graphics in Photoshop

You can create an image template with components that are replaceable and control the image with an excel spreadsheet. This automates the process of making several different awards, title cards, etc.

[How data-driven graphics works](https://helpx.adobe.com/photoshop/using/creating-data-driven-graphics.html)

Notably, [Photopea](https://www.photopea.com/), a free online Photoshop equivalent, also supports data driven graphics! You can use the same guide linked above.

Different online tools exist for this like Canva, but I have no experience with them.

### Spreadsheets

I use [Google sheets](https://sheets.google.com) for a "video infosheet" that lists all the videos, their sources, editor comments, and links to Kollab.

### Grav CMS

This runs the RICE website. You can create a website with pages written in markdown (which is the same formatting Discord uses).    
https://getgrav.org/ or https://github.com/getgrav/grav

For the sortable tables, you’ll also need this plugin:     
https://github.com/reisir/grav-plugin-datatables

Grav CMS is free and open-source. You can host & install it yourself or through Softalicious in cPanel.

### Convert Spreadsheet to Markdown

If you have a website that uses Markdown (like Grav CMS), then you can convert a spreadsheet into the markdown format with https://tabletomarkdown.com/convert-spreadsheet-to-markdown/

### Website & server hosting

I use https://verpex.com for my website hosting and https://hetzner.com for my VPS (server) hosting for the discord bots.

Unless you have many discord bots, I would recommend simply paying premium for the public instances. This is often more convenient and sometimes cheaper than a VPS.
