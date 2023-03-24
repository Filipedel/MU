import lyricsgenius as genius
import sys
import json

from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
api = genius.Genius("yu8QA2vbsT66Z76Fi0Ryg_gWuxiUxGZRknGsgz_AY4sJ8mJ2sSqB2srDNtryOmx2")


def getLyrics(song, artist):
    lyric = api.search_song(song, artist)
    return lyric.lyrics


# function to print sentiments
# of the song lyrics.
def sentiment_scores(song):
    # Create a SentimentIntensityAnalyzer object.
    sid_obj = SentimentIntensityAnalyzer()
    # polarity_scores method of SentimentIntensityAnalyzer
    # object gives a sentiment dictionary.
    # which contains pos, neg, neu, and compound scores.
    lyrics_dict = sid_obj.polarity_scores(song)
    print("Lyrics compound ", lyrics_dict['compound'] * 100, "% ")
    print("Lyrics Overall Rated As", end=" ")
    # decide sentiment as positive, negative and neutral
    if lyrics_dict['compound'] >= 0.05:
        print("Positive")
        return 'Positive'
    elif lyrics_dict['compound'] <= - 0.05:
        print("Negative")
        return "Negative"
    else:
        print("Neutral")
        return "Neutral"


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    detail = json.loads(sys.argv[1])
    print(json.dumps(detail))

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
