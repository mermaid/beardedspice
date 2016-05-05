//
//  TuneIn.plist
//  BeardedSpice
//
//  Created by Michael Alden on 6/16/15.
//  Copyright (c) 2015 Tyler Rhodes / Jose Falcon. All rights reserved.
//
BSStrategy = {
  version:1,
  displayName:"TuneIn",
  acceptMethod: "predicateOnTab",
  acceptParams: {
    format:"SELF LIKE[c] '*tunein.com*'",
    args:"url"
  },
  isPlaying: function isPlaying () { return $('#tuner').attr('class') === 'playing' },
  toggle: function toggle() { document.querySelector('.playbutton-cont').click(); },
  next: function next () {},
  favorite: function favorite () { $('.icon.follow').click() },
  previous: function previous () {},
  pause: function pause () {
    if($('#tuner').attr('class') == 'playing'){
      document.querySelector('.playbutton-cont').click();
    }
  },
  trackInfo: function trackInfo () {
    var ret = TuneIn.app.nowPlaying.broadcast;
    return {
      'track': ret.DisplaySubtitle,
      'album': ret.EchoData.title,
      'artist': ret.Location,
      'favorited': $('#tuner div.icon.follow').hasClass('in'),
      'image': $('.artwork.col._navigateNowPlaying').children('.image').children('.logo.loaded').attr('src'),
    }
  }
}