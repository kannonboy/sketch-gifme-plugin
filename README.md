![gif.me logo](https://github.com/eliasjulian/sketch-gifme-plugin/blob/master/gifme-logo-50px.png "gif.me logo")

# Gif.me for Sketch

Embed gifs and videos in your Sketch files!

![Animated cat in Sketch file](https://github.com/kannonboy/sketch-gifme-plugin/raw/master/kitty.gif "Disruptive synergistic kitty")

## Installation

1. Open `Terminal`
2. Install [Homebrew](https://brew.sh)
3. Run `brew install ffmpeg`
4. Download and install the [latest plugin release](https://github.com/kannonboy/sketch-gifme-plugin/releases)
5. Select **Gif me** from the **Plugins** menu

## Usage
1. Select an existing shape (if you'd like it filled with the gif or video. If you just want the gif dropped into your file then no need to select anything!)
2. Run `Plugins › 🖼 Gif me`
3. Select the gif or video you want to add (Gif.me supports all video formats that are [supported by ffmpeg](https://en.wikipedia.org/wiki/FFmpeg#Supported_codecs_and_formats).
4. That's it! Have fun overloading your files with cat gifs, and hopefully easing the pain of designing for accessibility when gifs and video are involved. 

## More info

**What video formats are supported?**

Gifs, mp4s, and lots more. Gif.me supports all video formats that are [supported by ffmpeg](https://en.wikipedia.org/wiki/FFmpeg#Supported_codecs_and_formats).

**Where are the videos stored?**

The videos are saved as part of your Sketch file. Note that this can make your Sketch file rather large if you embed large videos! To remove the videos, simply delete the layer displaying the video. The video will be removed the next time you save.

**What happens if I don't have gif.me installed, and I open a Sketch file containing embedded videos?**

If you don't have the plugin installed, you will see a freeze frame in place of the video. You can continue to work with and save the Sketch file as normal. Videos will only be removed if you delete the layer associated them.

**What trickery is this?**

It turns out Sketch is really fast at drawing image fills. When you import a video using gif.me, it is split into frames (currently at a fixed rate of 25 frames per second). The *video layer*'s fill is then updated 25 times per second using each frame in sequence. This technique has a nice side effect of the video being just a regular layer, so you can use Sketch's powerful vector manipulation to create some pretty cool effects.

![Animated gif.me team dancing like chickens](https://github.com/kannonboy/sketch-gifme-plugin/raw/master/warp.gif "the gif.me team")

You can also apply the video to an existing layer by selecting it before clicking **Gif me**. For example, you can convert text to vectors (CMD+SHIFT+O) and then add a gif to it for text with an animated texture effect.

![The text gif.me with an animated fire texture](https://github.com/kannonboy/sketch-gifme-plugin/raw/master/textfire.gif "gif.me = 🔥")

**Using gif.me with Abstract?**

Since gif.me works by rapidly updating the layer fill, using gif.me in combination with a version control plugin or application such as Abstract, means that Abstract interprets those fill updates as file changes. Which results in a seemingly endless stream of commits despite not making any real visual changes to your file. While this isn't a bug, just know this is why you keep getting those `Preview & Commit` messages even if you're not making any visual changes.

