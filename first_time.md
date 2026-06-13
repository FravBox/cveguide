# First Time Setup

A checklist for how to set up your event in discord for the very first time.

It is heavily recommended you read [Community considerations](community.md) before running your event.

**Start at least a month before your event. Especially if you are using the Kollab webhook!**

## Discord

Notice: It's impossible to mass delete messages that are over two weeks old. You will have to delete & recreate a channel or re-use the channel.

Webhooks only work in a specific channel. If you delete a channel with a webhook, you must make a new webhook for the new channel.

Keep these in mind when deciding the format of your channels and their permissions.

[Guide to Discord permissions](https://thelinuxcode.com/give-permissions-on-discord/). Note that in the roles menu, if you click the 3 dots on any role, you can preview the server as that role to verify if your permissions were set correctly.

This checklist assumes the event channels will only be visible to a special event role.

- [ ] **Create your event role(s)**
- [ ] **Create a category for your event.**
  - [ ] Set the permissions for this category so only the event role can see it
    - [ ] @everyone: cannot view category
    - [ ] @EventRole: can view, post, connect, etc.
  - [ ] **Create the event channels**
    - [ ] News channel
      - [ ] Special permissions? (people can only read, not post?)
    - [ ] Voice channel(s)
    - [ ] Main/discussion channel(s)
    - [ ] Other channels (mini-events, important links, static info, comment feed, etc.)
- [ ] **Create Discord Webhooks in the channels**
  - [ ] For Kollaborate comments?
  - [ ] For category submissions?
  - [ ] For news posts?

## Kollaborate folders & links

- [ ] Subscribe to Kollaborate.tv
- [ ] Create "Project" for the event
- [ ] Make upload folder (if collecting uploads through Kollab)
- [ ] Make public videos folder
- [ ] Correct workflows for project?    
By default, Kollab will make a streaming version of all videos uploaded. You would turn this off (and assign any other automatic actions) in the workflow menu. [About workflows](https://www.kollaborate.tv/help/Workflows/File_Workflows).    
- [ ] Create share links
  - [ ] Upload request
  - [ ] File link to public videos folder
  - [ ] Correct permissions for share link? (comments, passwords, etc.)

## Forms & Spreadsheets

- [ ] Video submission form
  - [ ] Kollab upload request is in the form?
  - [ ] Spreadsheet is attached to the form?
    - [ ] Video information spreadsheet created & imports from this?
    - [ ] Google apps scripts are attached to the vid info spreadsheet?
    - [ ] Kollab public video folder link(s) in the spreadsheet?
- [ ] Category submission form?
  - [ ] [Google apps script](tech#google-forms-gt-discord) (so it posts to discord) attached?
    - [ ] Edited app script so it has the proper buttons & URLs?
- [ ] Category finalization form?
- [ ] Form to vote for video finalists?
- [ ] Form to vote for video winners

## Webhooks & pre-formatted messages

- [ ] **Kollab webhook enabled?** (for comment feed)
  - [ ] Edited PHP files appropriately
    - [ ] Added Kollab's secret key to PHP files
    - [ ] Added necessary links to the message buttons in the PHP files?
    - [ ] Added discord webhook URLs to the PHP files?
  - [ ] Uploaded PHP files to server
  - [ ] Added URL to php files in Kollab
  - [ ] Tested different comment types on Kollab to make sure the webhooks work
- [ ] **Discohook messages?** <br>Have you gotten familiar with how [Discohook](https://discohook.app) works? Did you want to use the bot? Have you come up with a unified way you want your messages to look? Did you need to set up any [button flows](https://discohook.app/guide/getting-started/flows)?
- [ ] **First channel messages?** <br>Did you make the first messages for each channel (and optionally pin them)?<br>E.g. welcome to the event, basic event info, important links, etc. You might want to format them nicely with discohook or other tools.
- [ ] **Event rules/info are posted somewhere?**<br>If it's not a separate webpage, google doc, or discord post, they might be in the submission form itself. What type of videos do you accept? How many are people allowed to submit? Etc.

## Pre-Event miscellaneous

- [ ] Told staff/mods about the event?
  - [ ] They know what their duties are?
  - [ ] They have the appropriate discord permissions in the event channels?
- [ ] Graphics/design of promotional materials finished?
- [ ] All links to forms, upload request, etc., confirmed working?
  - [ ] They all say the correct name/dates?


## Accepting submissions

- [ ] **Announce the event**
- [ ] **Accept video submissions**
  - [ ] Submission form is open?
  - [ ] Kollab upload link open/working?
  - [ ] Video info spreadsheet automation/formatting working appropriately?
- [ ] On Kollab: move videos from upload folder to public submissions folder once processed
- [ ] Deadline reminders / extra event announcements?
  - [ ] One month out
  - [ ] One week out
  - [ ] One day out
  - [ ] Day of

## Event officially starts

- [ ] **Close submission forms**
- [ ] Deactivate/password protect Kollab upload link?
- [ ] **Re-check all links are working**
  - [ ] Video information spreadsheet is publicly viewable?
  - [ ] Kollab webhook comment feed?
  - [ ] Category submission forms?
  - [ ] Link buttons on your opening messages?
- [ ] **[Make participant list](tech/#participant-list-without-any-duplicates)**
  - [ ] Assign all participants the event role so they can see the event channels (can be automated through a bot like [YAGPDB](tools#yet-another-general-purpose-discord-bot-yagpd).)
- [ ] Make an official event starting message?
  - [ ] Event participants know who to contact (or what to do) if something is wrong?

## While the event is running

- [ ] Participants know how to make mini-events?
- [ ] Mods/staff check-in: are they able to do their responsibilities?
- [ ] Previous voting form closed before next voting form is opened
- [ ] Announcements of form deadlines/new releases?
- [ ] Finalists announced?
  - [ ] Categories?
  - [ ] Video finalists?
- [ ] Date & time of finalists/winners show(s) announced?
- [ ] Prizes ordered for winners?

## Event is ending

- [ ] Final messages/announcements?
  - [ ] Thank everyone for participating?
  - [ ] Link to participant youtube playlist/event history?
  - [ ] Contact winners for mailing information?
- [ ] Remove event role from everyone so they can't access the event channels anymore (can be automated through a bot or simply delete the role)
- [ ] Delete/password protect Kollab share links
- [ ] Make sure all form links are not allowing responses
- [ ] Change permissions of the video info spreadsheets?
- [ ] Announcement of when next event will be?

## Event has ended

- [ ] End Kollab subscription or deactivate kollab webhook     
If you plan to keep the Kollab subscription, the easiest way to turn the webhook off is to remove the discord webhook URLs from your PHP files.    
Then you will not need a new secret key or have to mess with Kollab settings the next time you run your event.     
- [ ] Announce event finalists/winners publicly?
- [ ] Order and/or ship prizes to winners?
- [ ] Event channels: Re-create channels, delete messages, or otherwise prepare for next year?    
If re-using the channels:     
  - [ ] Re-name threads so they have the year in the title (to differentiate them from future threads)
    - [ ] Lock & close the threads
  - [ ] Update or delete old pinned messages in preparation for the next event
