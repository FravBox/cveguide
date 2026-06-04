# Technicals

How to do particular things for the event. Use the sidebar to navigate.

# Discord Webhooks

Webhooks are discord "apps" used to take information from other websites and post it as a discord message. Here's how to create one:

1. Go to the channel settings you want the messages posted to
2. Integrations -> Create webhook
3. Click on the webhook you just created (Usually "captain hook" or "spidey hook")
4. Change the profile picture and name to your desires
5. Click the "copy Webhook URL" button and save this URL for later

**Do not share your webhook URLs.**     
Anyone with access to your webhook URLs can post anything they want into your discord channel.

# Kollaborate

Only one person (likely the event coordinator) needs an account. Everyone else is a "guest." This is typically the case for all video review platforms. Therefore, don't worry about any "team" plans.

[Kollab basic usage documentation](https://www.kollaborate.tv/help).

## Start early!

Kollaborate updates often and things **will** break. Especially the webhook. If you are on a monthly Kollab plan, subscribe at least one month early to make sure you can still accomplish your goals.    
*Do not expect everything to work the same as it did the last time you ran the event!*

## Need to know for blind events

Blind events are where you don't know who uploaded what video.    
People with Kollab accounts can see all the metadata associated with the files.

Guests (people without accounts who are viewing share links) cannot see any information underneath the video - metadata, information, users, or history.    
**Importantly, this means guests cannot see upload date or uploader information.**

They *can* see dates of comments and who left those comments (if you have enabled comments in your share link options).

## Share links
You cannot directly share a project.

Create 2 folders. 1 folder for uploads and a separate folder for "public videos" for the event.    
Then, navigate to "share" in the menu and "New link."     
-# (You can also make new share links by clicking the chain icon near any file or folder.)

**Pay attention to the link's  options.**    
[This explains what each option for a share link does](https://www.kollaborate.tv/help/Sharing/Sharing)     
Note that captions and comments are not enabled by default.

**An "upload request" is an upload link.**    
Give people this link to upload directly to your upload folder. They will not be able to see the contents of the folder.

**A "file link" is a link to a file or folder.**    
Click the file or folder you want to share and then "share file."     
Use these links to share individual files and folders for your event.     
When you share a folder, guests are able to see all files and subfolders.

Note: if you want guests to be able to do side-by-side comparisons, you must make versions accessible.

## Webhooks - Kollab comment feed on discord

The webhook is what makes a discord comment feed possible.     
**It requires a separate web host with PHP.** Any shared hosting provider should be able to do this.     
I use https://verpex.com shared hosting because it's cheap.

Make a discord webhook and save its URL before continuing to the following steps.

### Enable the kollab webhook & get your secret key

There is one webhook that watches all projects in your account.     
In the rare case you have a team and/or linked kollab accounts, only the host account (you) can enable the webhook, even though the other accounts have the menu for it.

Navigate to your account name. At the time of writing this, it's in the lower left corner. In previous versions, it was in the upper right.

Click "account" to get to your account settings.

Click the "integration" tab.

Copy your "secret key." 

We have to take a small detour now before we can actually turn the webhook on.


### Configure the PHP file(s)

Kollab webhooks are in beta; there is not any documentation for them. How it works changes every year and because there's no documentation, you must guess & check on a live project.

If you know some coding, you can use the sample PHP file Kollab provides and edit it to your needs.

If you don't know how to code, Reisir & I have made [this set of files](https://github.com/tsukomu/kollaborate-webhook) you can use instead.

If you're using the sample PHP file, read the PHP file and follow its instructions.

#### If you're using the PHP files from the github repo

1. On github, click the green "code" button and the "download ZIP" option.
2. On your computer, unzip the files to a folder like "kollab webhook."
3. Copy `defaults.php` and name the copy `environment.php`
4. Open `environment.php` in a text or code editor

**Public vs private webhook**

The public webhook is the one that posts kollab comments to discord.     
**The private webhook is optional** and shows logs of who viewed the files, who commented, etc. It is spammy and should be sent somewhere private (like a different server) and muted until something untoward happens, at which point you can then search for the log if it.

5. Put the discord webhook URL for your public webhook inside the quotes in the `$public_webhook` line. 
6. If you want a private webhook, put that discord webhook URL in the `$logging_webhook` line. Otherwise, don't change it.
7. Remember the secret key from Kollab? Paste that inside the quotes on the `$secret_key` line.
8. Scroll down to `$link_list_components`. This makes buttons at the end of your comment message. Here are the things you should change:
   - `label` - the text on the button. 
   - `emoji` - the emoji on the left side of the text on the button. Remove this line entirely if you don't want any emoji there.
   - `url` - link the button goes to.

The recommended link setup is: `[share link to your video folder] [video information spreadsheet] [some other informative link]`    
In my event, the 3 links are `[Event videos] [Vid info sheet] [CW & VPR doc]`

Don't change anything else unless you know what you're doing.

### Upload the PHP file(s) to your web host.

Save the direct URL to it for the next step.

If you're using the github repo webhook, make a new folder on your domain called `kollab`and upload these into it:
- `environment.php`
- `defaults.php`
- `public` folder
- `src` folder

The URL you will need for the next step is `https://yourdomain.com/kollab/public/webhook.php`

### Enable the webhook on kollab (for real this time)

Go back to Kollab.

1. Your account -> integration
2. Endpoint URL: the URL to your PHP file(s)
3. Verify webhook

**Your script responded appropriately...etc.**    
You're done. Navigate away on Kollab.     
Now view, upload, comment, etc., on a kollab file to make sure it is actually posting to discord how you want.

**There was an error.**

Make sure your secret key is correct between Kollab and your PHP files.

If it still errors, make sure the endpoint URL is actually pointing the correct thing. 

If it still errors, make sure your script is verifying Kollab's signature. If it currently is, stop. For some reason, Kollab does not actually attach its signature with every message.     
I've tried talking to Kollab support about this, but they can't seem to replicate the issue.

If you're using the github repo, you can turn off signature checking in `environment.php` by changing `$kollaborate_has_fixed_their_sig = true;` to `$kollaborate_has_fixed_their_sig = false;`

If it is still erroring, Kollab probably changed something and you will need to update the PHP files to accommodate. Hope you started early! :)

### Troubleshooting webhook issues

#### Some comments are not being sent

Kollab sometimes does not send its header signature. Disable signature checking.

#### The link to the video sometimes goes to the folder instead

The link used in the discord message is the link the person who left the comment actually used.    
If they used the folder link to get to the video, it is the folder link. If they used a direct share link to the video, that is what is used.

If you need to guarantee a specific link, distribute your links more carefully or don't link back to the video in the discord message.

#### Markers/colors/annotations/replies aren't working properly

Kollaborate changed something and you will have to edit the PHP files.

#### The logging webhook is missing some information on some messages

The information given is different between logged in users and guests. Some information will be missed or different when the action performed is from a logged in user.    
For this event, we are assuming you only have one user and that user is the event coordinator.     
A user is someone with a kollaborate account that is logged into the project. Everyone else is a guest.

#### It is posting comments from other events/projects

The kollaborate webhook captures all comments across all files connected to your kollaborate account. If you need to separate based on project, you will have to edit your PHP file(s) to filter for that specific project only.     
Alternatively, only host one event at a time.

# Google Forms -> Discord

My event has a "category suggestion" phase where people suggest custom awards through a google form. Those google form responses are then posted to Discord near real-time.

Create your google form, then go to the script editor to add your script for the discord webhook.     
[Basic instructions can be found here.](https://github.com/Iku/Google-Forms-to-Discord)

You can then customize the message format if necessary.

The one I used to use for RICE is below.     
```js
const POST_URL = "https://discord.com/api/webhooks/your_webhook_url";

function onSubmit(e) {
    const response = e.response.getItemResponses();
    let items = [];

    for (const responseAnswer of response) {
        const question = responseAnswer.getItem().getTitle();
        const answer = responseAnswer.getResponse();

        if (!answer) continue;

        let processedAnswer = answer;

        // If answer is an array (checkbox question), convert to bullet list
        if (Array.isArray(answer)) {
            processedAnswer = answer.map(v => `- ${v}`).join("\n");
        }

        // Now chunk the processed answer into <=1024 chars (Discord limit)
        let parts = [];
        try {
            parts = processedAnswer.match(/[\s\S]{1,1024}/g) || [];
        } catch (e) {
            parts = [processedAnswer];
        }

        // Build embed fields
        for (const [index, part] of Object.entries(parts)) {
            if (index == 0) {
                items.push({
                    "name": question,
                    "value": part,
                    "inline": false
                });
            } else {
                items.push({
                    "name": question.concat(" (cont.)"),
                    "value": part,
                    "inline": false
                });
            }
        }
    }

    const options = {
        "method": "post",
        "headers": {
            "Content-Type": "application/json",
        },
        "payload": JSON.stringify({
            "content": "‌",
            "embeds": [{
                "title": "",
                "color": 10118461,
                "fields": items,
                "description": "## [Submit New Category](https://linkhere.com)\n[View All Submissions](https://googlespreadsheet.com) | [Category FAQ](https://linkhere.com)",
                "footer": {
                    "text": " "
                }
            }]
        })
    };

    UrlFetchApp.fetch(POST_URL, options);
}
```
`"fields":items,` are you form questions. Do not change this line.     
`"description":` is displayed once before your questions.    
You need to edit this so it suits your event.

**How to install**    
1. In the google form, click the 3 dots in the top right and select "apps script"
2. on the apps page, copy/paste the code into the editor.
3. Replace the first line with the discord webhook with your discord webhook url.
4. click the save icon
5. triggers -> add trigger
   - function to run on: onSubmit
   - which deployment should run: head
   - select event source: from form
   - select event type: on form submit
   - save

6. make a test submission on your form to make sure it worked.


# Google Forms - optional emailed form receipts

Google forms can have email receipts only if you *require* an email and the email question is the first question in the form.

There's a few forms add-ons that will do form receipts but they are... not good.

Here is a script to email a simple form receipt for an *optional* email question placed anywhere in the form.    
The script includes a BCC line so you can get an email too, if you want.

```js
const EMAIL_QUESTION = "Email address (optional)"; // Must match your form question exactly (case-sensitive)
const EMAIL_SUBJECT  = "Your submission receipt";
const EMAIL_FROM     = "Your_Email@gmail.com"; // Must be an email address/alias in your Google account. If not found, defaults to current gmail.
const EMAIL_BCC      = ""; // Add BCC recipient here


function onFormSubmit(e) {
  const form = FormApp.getActiveForm();
  const formResponse = e.response;
  const itemResponses = formResponse.getItemResponses();

  // Build a key-value map of question title → answer
  const responses = {};
  itemResponses.forEach(r => {
    responses[r.getItem().getTitle()] = r.getResponse();
  });

  const email = responses[EMAIL_QUESTION]?.trim();
  if (!email) return; // No email provided, do nothing

  const summary = itemResponses
  .filter(r => r.getResponse() !== "")
  .map(r => `<b>${r.getItem().getTitle()}</b><br>${r.getResponse()}`)
  .join("<br><br>");

  const confirmationMessage = form.getConfirmationMessage();

  MailApp.sendEmail({
    from: EMAIL_FROM,
    to: email,
    bcc: EMAIL_BCC,
    subject: EMAIL_SUBJECT,
    htmlBody: `Thanks for your submission! Here is a summary of your responses:<br><br>${summary}<br><br>${confirmationMessage}`
  });
}
```

**How to install:**    
1. In the google form, click the 3 dots in the top right and select "apps script"
2. on the apps page, copy/paste the code into the editor.
3. Edit the first 4 lines of the script to your needs.
4. click the save icon
5. triggers -> add trigger
   - function to run on: onFormSubmit
   - which deployment should run: head
   - select event source: from form
   - select event type: on form submit
   - save

6. make some test submissions on your form - one with an email filled in and one without - to make sure it worked.

# Google Sheets -> Discord

Instead of one-way posting form submissions to discord, you can post entries from google sheets instead and retain some information. This will allow you to edit your discord messages later.

`[code is private for now]`

**How to install**    

1. In the google sheet, extensions -> Apps script
2. On the apps page, copy/paste the code into the editor
3. Make sure the first 4 lines are correct.
4. click the save icon
5. triggers -> add trigger
   - function to run on: onFormSubmit
   - which deployment should run: head
   - select event source: from spreadsheet
   - select event type: on form submit
   - save
6. triggers -> add trigger (only if you might manually edit the sheet)
   - function to run on: onEdit
   - which deployment: head
   - event source: from spreadsheet
   - on event type: on edit
   - save
7. make a form submission. Check for the following:
   - discord message posted
   - in the google sheet, discord message ID entered into the proper cell
   - in the google sheet, "original timestamp" updated
8. edit the test form submission. Check that the discord message edited.

Delay is up to 2min. Any longer and you're likely being ratelimited by discord.

# Google Sheets formulas

Typically speaking, all formulas here assume:
- Google form attached to a google sheet
- A completely untouched `Form Responses 1` tab
- A new tab where we're currently working
- Maximum 80 form responses/rows

## Search for duplicate editors & compare video lengths

This searches editor discord name(column H) for duplicates. If there's 3+, there's an error stating so.

It then searches video duration (column J). It will compare 2 entries sharing the same editor and add the times. If they are 10:00+, it shows a warning stating so.

Requirements:
- the original form responses tab has:
  - 1 column with editor name
  - 1 column with video durations in mm:ss format.
- A new tab or sheet that has an equal number of rows as the form responses tab and (for the most part) copies the responses into it
- This new tab or sheet has an empty column to display any errors associated with that form response

In other words: 
- `Form Responses 1` tab is not touched
- your 2nd tab has this formula in `A2`
- `B2` is an `ARRAYFORMULA` that imports all of your form responses (no headers)

Here's the formula. Edit the column letters & rows if necessary (my code assumes no more than 80 participants).    
You shouldn't need to touch anything under `all_j`.    

```js
=MAP('Form Responses 1'!H2:H80, 'Form Responses 1'!J2:J80, LAMBDA(hcell, jcell,
  IF(hcell="", "",
  LET(
    all_h,    'Form Responses 1'!H2:H80,
    all_j,    'Form Responses 1'!J2:J80,
    count,    COUNTIF(all_h, hcell),
    jsec,     VALUE(LEFT(jcell, FIND(":",jcell)-1))*60 + VALUE(MID(jcell, FIND(":",jcell)+1, 10)),
    jsum_sec, SUMPRODUCT(
                (LOWER(all_h)=LOWER(hcell))*
                (VALUE(IFERROR(LEFT(all_j, FIND(":",all_j)-1),0))*60 +
                 VALUE(IFERROR(MID(all_j,  FIND(":",all_j)+1, 10),0)))
              ),
    threshold, 601,
    cond1, IF(count>=3, "3+", ""),
    cond2, IF(count>1,  IF(jsum_sec>=threshold, INT(jsum_sec/60)&":"&TEXT(MOD(jsum_sec,60),"00"), ""), ""),
    cond3, IF(count=1,  IF(jsec>=threshold,     INT(jsec/60)    &":"&TEXT(MOD(jsec,60),    "00"), ""), ""),
    TEXTJOIN(", ", TRUE, cond1, cond2, cond3)
  ))))
```
This is what it looks like in the sheet:

![error column in google sheets using this code](/images/gsheets_errors.png)

## Participant list without any duplicates

I have a column for discord usernames. I then use this unique list to give out discord roles and configure form validation.

It assumes the participant name is in column H of form responses 1.

```js
=UNIQUE(ARRAYFORMULA(LOWER('Form Responses 1'!H2:H80)))
```

## Markdown links

I make participants tables for the event history website. This formula takes the youtube handle + editor name questions and creates a list of markdown links where the editor name links to the youtube channel.

This code will automatically skip people who didn't provide a youtube handle and format appropriately.

Requires:    
- Column of youtube handles where the format is `@YTHandle` (column L)
- Column of editor names (column I)

```js
=ARRAYFORMULA(IF('Form Responses 1'!L2:L80="", 'Form Responses 1'!I2:I80, "["&'Form Responses 1'!I2:I80&"](https://youtube.com/"&'Form Responses 1'!L2:L80&")"))
```

## Get URLs from google sheet

This makes it so you can pull URLs from cells in google sheets and use them in formulas elsewhere. 

**It assumes the tab the hyperlinks are coming from is called "Everything".**

Script must be attached to the sheet it is reading from.

```js
function GETURLS(rangeAddress) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Everything");
  var range = sheet.getRange(rangeAddress);
  var richTexts = range.getRichTextValues();
  return richTexts.map(row => [row[0].getLinkUrl() || ""]);
}
```
**To install the script:**    
1. In the google sheet, extensions -> Apps script
2. On the apps page, copy/paste the code into the editor
3. Change `"Everything"` to the sheet tab you want to grab the URLs from
4. Save (no triggers)

**To use the urls in a formula,** use `GETURLS("A1:A1")` in your formula in your sheet.

As an example, the following script takes 2 cells (A2 & D2), combines them with a hyphen (A2 - D2) and copies the hyperlink from D2 into the current cell and does this for each row:
```js
=ARRAYFORMULA(IF(Everything!A2:A="","",HYPERLINK(GETURLS("D2:D"),Everything!A2:A&" - "&Everything!D2:D)))
```

# Etc

I feel like I'm forgetting something?