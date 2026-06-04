# Tools & Services

For the purposes of this document, we're assuming that your event is the following:

- Entrants submit videos
- The videos are blinded (participants don't know who made which videos)
- All or most videos want comments of some kind
- The entrants will be doing the commenting
- There is a contest/awards component
- The entrants will be voting/judging for those awards
- The event is based in a discord server

**This page only lists the tools. View how to use them on the [Technicals](tech.md) page.**

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

### Discohook (bot + website)

[Discohook.app](https://discohook.app) [(Github repo)](https://github.com/discohook/discohook) and its companion [discord bot](https://github.com/discohook/discohook/tree/main/packages/bot) are free and open-source tools that help you make discord messages without coding anything.

The website is a WYSIWYG editor for embeds and components v2 messages. It will allow you to post through a webhook, make fancy-looking messages, and create buttons that do simple tasks.

In most cases, the bot is not required. You can do almost everything through the website. However, the bot will make some things more convenient.

**You can probably use Discohook by itself without the use of YAGPDB.**     
I use personally use both, as discohook is slightly more convenient for some types of messages.

**What Discohook is used for**    
- Creating messages with previews
- Posting through a webhook
- Creating messages with simple button functions
- Convenient message maintenance (on messages previously posted by Discohook)

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

## Other tools

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