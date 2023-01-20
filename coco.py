import speech_recognition as sr
import pyttsx3
import random
import pywhatkit
import datetime
import wikipedia
import pyjokes

listener = sr.Recognizer()
engine = pyttsx3.init()

voices = engine.getProperty('voices')
engine.setProperty('voice', voices[1].id)

engine.say('Hello! I am Coco')
engine.say('What are we doing today?')
engine.runAndWait()

def talk(text):
    engine.say(text)
    engine.runAndWait() 


def get_command():
    try:
        with sr.Microphone() as source:
            print('Speak : ')
            voice = listener.listen(source)
        command = listener.recognize_google(voice)
        
        command = command.lower()
        
        # if 'coco' in command:
        #     print(command)
        #     talk(command)
        
        if 'coco' not in command:
            pass
        else:
            print(command)

    except:
        pass
    
    return command


GREET_IN  = ("hello", "hi", "greetings", "namaste", "wassup", "hey", "heyo", "sup")
GREET_OUT = ("hello", "hi", "Oh hello", "Oh hi", "greetings", "whats up")

GREET_2 = ("I am fine, thank you", "I am doing good, thank you", "I am great, Hope you are well!")

DESC = ("what is a", "what is the", "tell me about", "what is", "talk to me about", "info on", "i want to know about", "what the hell is")

WHOIS = ("who is", "who the hell is")

def run_coco():
    command = get_command()
    print('YOU : ', command)
    #command = command.lower()
    
    if 'play' in command:
        command = command.replace('coco', '')
        command = command.replace('play', 'playing')
        talk(command)
        
        search_song = command.replace('playing', '')
        pywhatkit.playonyt(search_song)
        return True
    elif 'how are you' in command:
        response = random.choice(GREET_2)
        talk(response)
        return True
    elif 'bye' in command:
        talk('Bye! talk to you later')
        go = False
        return go
    elif 'time' in command:
        time = datetime.datetime.now().strftime('%I:%M %p')
        print(time)
        talk(time)
        return True
    elif 'joke' in command:
        talk(pyjokes.get_joke())
        return True
    elif 'google' in command:
        search = command.replace('google', '')
        pywhatkit.search(search)
        return True
    elif 'what do you look like' in command:
        talk('Imagine the feeling of a friendly hug combined with the sound of laughter. Add a librarian’s love of books, mix in a sunny disposition and a dash of unicorn sparkles, and voila!')
        return True
    elif 'not funny' in command:
        talk('I can not help it if you have a bad sense of humour')
        return True
    
    else:
        for who in WHOIS:
            if who in command:
                search = command.replace(who, '')
                info = wikipedia.summary(search, 2)
                print('COCO : ', info)
                talk(info)
        for query in DESC:
            if query in command:
                search = command.replace('query', '')
                info = wikipedia.summary(search, 2)
                print('COCO : ', info)
                talk(info)
        for word in command.split():
            if word.lower() in GREET_IN:
                talk(random.choice(GREET_OUT))
                

        #talk(command)
        return True


go = True
while(go):
    go = run_coco()