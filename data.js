
/*Speakers*/
const KELLY_SHUSTER = {
    "name": "Kelly Shuster",
    "twitter": "https://twitter.com/kellyshuster"
};
const MURAT_YENER = {
    "name": "Murat Yener",
    "twitter": "https://twitter.com/yenerm"
};
const WAYNE_PIEKARSKI = {
    "name": "Wayne Piekarski",
    "twitter": "https://twitter.com/waynepiekarski"
};
const ANDREA_LUCIBELLO = {
    "name": "Andrea Lucibello",
    "twitter": "https://twitter.com/andreoid82"
};
const LUCA_PIRAS = {
    "name": "Luca Piras",
    "twitter": null
};
const FRANCESCO_SANTAGATI = {
    "name": "Francesco Santagati",
    "twitter": "https://twitter.com/fra_santagati"
};
const HUYEN_TUE_DAO = {
    "name": "Huyen Tue Dao",
    "twitter": "https://twitter.com/queencodemonkey"
};

const KEVIN_PELGRIM = {
    "name": "Kevin Pelgrim",
    "twitter": "https://twitter.com/kevinpelgrims"
};
const KAMIL_KRZYK = {
    "name": "Kamil Krzyk",
    "twitter": "https://twitter.com/f1sherkk"
};
const EUGENIO_MARLETTI = {
    "name": "Eugenio Marletti",
    "twitter": "https://twitter.com/workingkills"
};
const SEBASTIANO_POGGI = {
    "name": "Sebastiano Poggi",
    "twitter": "https://twitter.com/seebrock3r"
};
const JOVICA_POPOVIC = {
    "name": "Jovica Popovic",
    "twitter": "https://twitter.com/jpop_32"
};
const EGOR_ANDREEVICI = {
    "name": "Egor Andreevici",
    "twitter": "https://twitter.com/EgorAnd"
};
const ROMAIN_GUY = {
    "name": "Romain Guy",
    "twitter": "https://twitter.com/romainguy"
};
const CHET_HAASE = {
    "name": "Chet Haase",
    "twitter": "https://twitter.com/chethaase"
};
const CHRISTINA_LEE = {
    "name": "Christina Lee",
    "twitter": "https://twitter.com/runchristinarun"
};
const HANNELI_TAVANTE = {
    "name": "Hanneli Tavante",
    "twitter": "https://twitter.com/hannelita"
};
const BREANDAN_CONSIDINE = {
    "name": "Breandan Considine",
    "twitter": "https://twitter.com/breandan"
};
const NICOLAS_ROARD = {
    "name": "Nicolas Roard",
    "twitter": "https://twitter.com/@camaelon"
};
const MIKE_NAKHIMOVICH = {
    "name": "Mike Nakhimovich",
    "twitter": "https://twitter.com/friendlymikhail"
};
const CHRIS_GUZMAN = {
    "name": "Chris Guzman",
    "twitter": "https://twitter.com/speaktochris"
};
const TAYLOR_LING = {
    "name": "Taylor Ling",
    "twitter": "https://twitter.com/taylorling"
};





/*TOPICS*/
 const ACCESSIBILITY = "Accessibility";
 const ANDROID_IOT = "Android IoT";
 const ANDROID_STUDIO = "Android Studio";
 const ARCHITECTURE = "Architecture";
 const CUSTOM_VIEWS = "Custom Views";
 const DATA_BINDING = "Data Binding";
 const ESPRESSO = "Espresso";
 const FLUTTER = "Flutter";
 const FRAGMENTS = "Fragments";
 const GO = "GO";
 const GRADLE = "Gradle";
 const HISTORY = "History";
 const KOTLIN = "Kotlin";
 const LAYOUTS = "Layouts";
 const LIBRARIES = "Libraries";
 const MATERIAL_DESIGN = "Material Design";





const topics = [
		ACCESSIBILITY,ANDROID_IOT,
		ANDROID_STUDIO,	ARCHITECTURE,
    	CUSTOM_VIEWS,DATA_BINDING,
    	ESPRESSO,FLUTTER,
   		FRAGMENTS,GO,
    	GRADLE,HISTORY,
        KOTLIN,LAYOUTS,
        LIBRARIES,MATERIAL_DESIGN

	];


var talks = [
	{
		"name":"Android is for Everyone",
		"video":"https://youtu.be/-coa0n4SUBk?list=PLWy8DQlwJkdwmAE2ETiQSxg6TWSn0m1H5",
		"slides":"https://speakerdeck.com/realm/kelly-shuster-android-is-for-everyone",
		"speakers":[KELLY_SHUSTER],
		"topic": ACCESSIBILITY
	},
    {
        "name":"Android Things for IoT Talk",
        "video":"https://youtu.be/L1JTnPDQpiI?list=PLWy8DQlwJkdwlV36QfGOrlTH5Y7Domgvo",
        "speakers":[WAYNE_PIEKARSKI],
        "topic": ANDROID_IOT
    },
    {
        "name":"Fifty Shades of Android Studio",
        "video":"https://youtu.be/O3Xj1vBc0Xg?list=PLWy8DQlwJkdwADprLAc2n3x9zcxEnQO6F",
        "speakers":[MURAT_YENER],
        "topic": ANDROID_STUDIO
    },
    {
        "name":"Make your Android Studio Plugin",
        "video":"https://youtu.be/znDROg5CzZw?list=PLWy8DQlwJkdzcgWrCWSYwY5PRiJFWwmIj",
        "slides":"https://speakerdeck.com/synesthesia/make-your-own-android-studio-plugin",
        "speakers":[ANDREA_LUCIBELLO],
        "topic": ANDROID_STUDIO
    },
	{
        "name":"Adaptable architecture for agencies",
        "video":"https://youtu.be/qSe8oXEln0I?list=PLWy8DQlwJkdxkdZ7LRS5aPN_VlYo00DVD",
        "slides":"https://speakerdeck.com/synesthesia/adaptable-architecture-for-agencies-sharing-our-experience",
        "speakers":[LUCA_PIRAS,FRANCESCO_SANTAGATI],
        "topic": ARCHITECTURE
    },
    {
        "name":"Measure, Layout, Draw, Repeat: Custom Views and ViewGroups",
        "video":"https://www.youtube.com/playlist?list=PLWy8DQlwJkdwRK_My8WsCz-lg3DLep-YP",
        "slides":"https://speakerdeck.com/queencodemonkey/360-andev-measure-layout-draw-repeat",
        "speakers":[HUYEN_TUE_DAO],
        "topic": CUSTOM_VIEWS
    },
    {
        "name":"Data Binding in the Real World",
        "video":"https://realm.io/news/droidkaigi-kevin-pelgrims-data-real-world-data-binding/",
        "slides":"https://speakerdeck.com/kevinpelgrims/data-binding-on-android",
        "speakers":[KEVIN_PELGRIM],
        "topic": DATA_BINDING
    },
    {
        "name":"Deeper insight into Android Espresso library",
        "video":"https://youtu.be/2Sw7zrJG1-0?list=PLWy8DQlwJkdyjxz4huXz5iRbjIELeeuJQ",
        "slides":"https://speakerdeck.com/f1sherkk/deeper-insight-into-android-espresso-library-v2",
        "speakers":[KAMIL_KRZYK],
        "topic": ESPRESSO
    },
    {
        "name":"A new hope",
        "video":"https://youtu.be/1mGEpCEbnXk?list=PLWy8DQlwJkdym-ISJNR8ZSKd0048Z0Pns",
        "slides":"https://speakerdeck.com/takhion/a-new-hope",
        "speakers":[EUGENIO_MARLETTI,SEBASTIANO_POGGI],
        "topic": FLUTTER
    },
    {
        "name":"Gophers are coming",
        "video":"https://youtu.be/XS0cuFm7hgo?list=PLWy8DQlwJkdwdLouTsRJuLL2WjM2ekx2T",
        "slides":"https://www.slideshare.net/JovicaPopovic/gomobile-gophers-in-the-land-of-android",
        "speakers":[JOVICA_POPOVIC],
        "topic": GO
    },
    {
        "name":"Making the most of your Gradle Builds",
        "video":"https://youtu.be/-RNXngQY5Dc?list=PLWy8DQlwJkdyeM_J3__bGynwEXmeg2ldh",
        "slides":"https://www.slideshare.net/EgorAndreevici/making-the-most-of-your-gradle-builds",
        "speakers":[EGOR_ANDREEVICI],
        "topic": GRADLE
    },
    {
        "name":"An Android Retrospective",
        "video":"https://youtu.be/xOccHEgIvwY?list=PLWy8DQlwJkdytDOSVZhq6NIOnSioj8zPq",
        "slides":"https://www.slideshare.net/EgorAndreevici/making-the-most-of-your-gradle-builds",
        "speakers":[ROMAIN_GUY, CHET_HAASE],
        "topic": HISTORY
    },
    {
        "name":"Kotlin: A Followup",
        "video":"https://youtu.be/j-3HOCGxbaI?list=PLWy8DQlwJkdyfmKRdFfwTR5FjJ92Yq-bu",
        "slides":"https://christinalee.github.io/Slides/slides-master/kotlin-retro",
        "speakers":[CHRISTINA_LEE],
        "topic": KOTLIN
    },
    {
        "name":"Kotlin in Production",
        "video":"https://youtu.be/mDpnc45WwlI?list=PLWy8DQlwJkdyfmKRdFfwTR5FjJ92Yq-bu",
        "slides":"https://christinalee.github.io/Slides/slides-master/kotlin",
        "speakers":[CHRISTINA_LEE],
        "topic": KOTLIN
    },
    {
        "name":"Typing in Java, Kotlin and Scala",
        "video":"https://youtu.be/9h0XjuU0Ipk?list=PLWy8DQlwJkdyfmKRdFfwTR5FjJ92Yq-bu",
        "slides":"https://www.slideshare.net/hannelita/typing-in-java-kotlin-and-scala",
        "speakers":[HANNELI_TAVANTE,BREANDAN_CONSIDINE],
        "topic": KOTLIN
    },
    {
        "name":"ConstraintLayout: It Can Do what Now?",
        "video":"https://www.youtube.com/playlist?list=PLWy8DQlwJkdwRK_My8WsCz-lg3DLep-YP",
        "slides":"https://speakerdeck.com/camaelon/constraintlayout-presentation",
        "speakers":[NICOLAS_ROARD],
        "topic": LAYOUTS
    },
    {
        "name":"How to reactively load and cache data without even trying",
        "video":"https://youtu.be/TvsOsgd0--c?list=PLWy8DQlwJkdy4LuB0QzjCFXdizG5Zi75Y",
        "slides":"https://www.slideshare.net/nakhimovich/data-loading-made-easy-with-mike-nakhimovich-droidcon-italy-2017",
        "speakers":[MIKE_NAKHIMOVICH],
        "topic": LIBRARIES
    },
    {
        "name":"Libraries I Wish I Knew About When I Started",
        "video":"https://youtu.be/r7z1dHL90BI?list=PLWy8DQlwJkdy4LuB0QzjCFXdizG5Zi75Y",
        "slides":"https://speakerdeck.com/chrisguzman/android-libraries-i-wish-i-knew-when-i-started",
        "speakers":[CHRIS_GUZMAN],
        "topic": LIBRARIES
    },
    {
        "name":"Journey to material Design Award",
        "video":"https://youtu.be/VZMe3LJuAPE?list=PLWy8DQlwJkdyA29LXz0r7jaaGqPhsCuRd",
        "slides":"https://speakerdeck.com/taylorling/designing-fabulous-journey-to-material-design-award",
        "speakers":[TAYLOR_LING],
        "topic": MATERIAL_DESIGN
    }
];