
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
const BRIAN_DUFF = {
    "name": "Brian Duff",
    "twitter": "https://twitter.com/taylorling"
};
const BRENDA_COOK = {
    "name": "Brenda Cook",
    "twitter": "https://twitter.com/kenodoggy"
};
const ELIF_BONCUK = {
    "name": "Elif Boncuk",
    "twitter": "https://twitter.com/elifbon_"
};
const JAKE_WHARTON = {
    "name": "Jake Wharton",
    "twitter": "https://twitter.com/JakeWharton"
};
const KAUSHIK_GOPAL = {
    "name": "Kaushik Gopal",
    "twitter": "https://twitter.com/kaushikgopal"
};
const PIETRO_MAGGI = {
    "name": "Pietro Maggi",
    "twitter": "https://twitter.com/pfmaggi"
};
const MARCOS_PLACONA = {
    "name": "Marcos Placona",
    "twitter": "https://twitter.com/marcos_placona"
};
const DARIO_INCALZA = {
    "name": "Dario incalza",
    "twitter": "https://twitter.com/h4oxer"
};
const SCOTT_ALEXANDER = {
    "name": "Scott Alexander",
    "twitter": "https://twitter.com/scottyab"
};
const ERIC_WING = {
    "name": "Eric Wing",
    "twitter": "https://twitter.com/ewingfighter"
};
const DEREK_ROZYCKI = {
    "name": "Derek Rozycki",
    "twitter": "https://twitter.com/D2theRak"
};
const KIRK_CHAMBERS = {
    "name": "Kirk Chambers",
    "twitter": "https://twitter.com/theKirken"
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
 const NEARBY = "Nearby";
 const PERFORMANCE = "Performance";
 const RXJAVA = "RxJava";
 const SECURITY = "Security";
 const SWIFT = "Swift";
 const TESTING = "Testing";



const topics = [
		ACCESSIBILITY,ANDROID_IOT,
		ANDROID_STUDIO,	ARCHITECTURE,
    	CUSTOM_VIEWS,DATA_BINDING,
    	ESPRESSO,FLUTTER,
   		FRAGMENTS,GO,
    	GRADLE,HISTORY,
        KOTLIN,LAYOUTS,
        LIBRARIES,MATERIAL_DESIGN,
        NEARBY,PERFORMANCE,
        RXJAVA,SECURITY,
        SWIFT,TESTING

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
    },
    {
        "name":"Add proximity to apps with Nearby",
        "video":"https://youtu.be/e3ufn-tY2Ek?list=PLWy8DQlwJkdxAlscTBe0MTbbULNLdLTwo",
        "slides":null,
        "speakers":[BRIAN_DUFF],
        "topic": NEARBY
    },
    {
        "name":"Optimizing and Profiling UI Performance",
        "video":"https://youtu.be/Uz5JgP_kzIM?list=PLWy8DQlwJkdxNmPpnFY5uTqfFCVK3mpDi",
        "slides":"https://speakerdeck.com/kenodoggy/optimizing-and-profiling-ui-performance-1",
        "speakers":[BRENDA_COOK],
        "topic": PERFORMANCE
    },
    {
        "name":"Optimizing Apps for Better Performance",
        "video":"https://youtu.be/hWbIU00zAX0?list=PLWy8DQlwJkdxNmPpnFY5uTqfFCVK3mpDi",
        "slides":"https://docs.google.com/presentation/d/1N195_xUSQr1g9iTfSOCbb-404rTxoTfkLHMjpKEZeqM/view",
        "speakers":[ELIF_BONCUK],
        "topic": PERFORMANCE
    },
    {
        "name":"Exploring RxJava 2 for Android",
        "video":"https://youtu.be/htIXKI5gOQU?list=PLWy8DQlwJkdxS1tS6GpEqcYC-6TAn_u3U",
        "slides":"https://gotocon.com/dl/goto-cph-2016/slides/JakeWharton_ExploringRxJava2ForAndroid.pdf",
        "speakers":[JAKE_WHARTON],
        "topic": RXJAVA
    },
    {
        "name":"Managing State with RxJava",
        "video":"https://youtu.be/0IKHxjkgop4?list=PLWy8DQlwJkdxS1tS6GpEqcYC-6TAn_u3U",
        "slides":"https://speakerdeck.com/jakewharton/the-state-of-managing-state-with-rxjava-devoxx-us-2017",
        "speakers":[JAKE_WHARTON],
        "topic": RXJAVA
    },
    {
        "name":"Learning RxJava (for Android) by example",
        "video":"https://youtu.be/k3D0cWyNno4?list=PLWy8DQlwJkdxS1tS6GpEqcYC-6TAn_u3U",
        "slides":"https://newcircle.com/s/post/1744/2015/06/29/learning-rxjava-for-android-by-example",
        "speakers":[KAUSHIK_GOPAL],
        "topic": RXJAVA
    },
    {
        "name":"Android Security, an enterprise perspective",
        "video":"https://youtu.be/1LacHsCRJw0?list=PLWy8DQlwJkdyVc631egdHy0-2ytO0LqCm",
        "slides":"https://speakerdeck.com/nibble/android-its-time-to-go-to-work",
        "speakers":[PIETRO_MAGGI],
        "topic": SECURITY
    },
    {
        "name":"I just hacked your app!",
        "video":"https://youtu.be/g2WF_Ttwho0?list=PLWy8DQlwJkdyVc631egdHy0-2ytO0LqCm",
        "slides":"https://speakerdeck.com/mplacona/i-just-hacked-your-app-droidcon-krakow-2016",
        "speakers":[MARCOS_PLACONA],
        "topic": SECURITY
    },
    {
        "name":"Attacking Android Applications",
        "video":"https://youtu.be/sZJzrF790fQ?list=PLWy8DQlwJkdyVc631egdHy0-2ytO0LqCm",
        "slides":"https://speakerdeck.com/h4oxer/attacking-android-applications",
        "speakers":[DARIO_INCALZA],
        "topic": SECURITY
    },
    {
        "name":"The Android Security Jungle: Pitfalls, Threats & Survival Tips",
        "video":"https://youtu.be/18tn_mF4XRg?list=PLWy8DQlwJkdyVc631egdHy0-2ytO0LqCm",
        "slides":"http://gotocon.com/dl/goto-cph-2015/slides/ScottAlexander-Bown_TheAndroidSecurityJunglePitfallsThreatsAndSurvivalTips.pdf",
        "speakers":[SCOTT_ALEXANDER],
        "topic": SECURITY
    },
    {
        "name":"What’s NNNNNNNNew in Android Security?",
        "video":"https://www.youtube.com/watch?v=XzRbhfVyoKo?list=PLWy8DQlwJkdyVc631egdHy0-2ytO0LqCm",
        "slides":"https://speakerdeck.com/scottyab/whats-nnnnnew-in-security-droidcon-it",
        "speakers":[SCOTT_ALEXANDER],
        "topic": SECURITY
    },
    {
        "name":"Swift on Android: The Future of Cross-Platform Programming or White Whale?",
        "video":"https://news.realm.io/news/swift-on-android",
        "slides":"https://speakerdeck.com/scottyab/whats-nnnnnew-in-security-droidcon-it",
        "speakers":[ERIC_WING],
        "topic": SWIFT
    },
    {
        "name":"Does it work? Did you test it?",
        "video":"https://youtu.be/Ru-ooxa1upc?list=PLWy8DQlwJkdyjxz4huXz5iRbjIELeeuJQ",
        "slides":"https://github.com//d2therak/DoesItWork/blob/master/Does%20it%20Work.pdf",
        "speakers":[DEREK_ROZYCKI,KIRK_CHAMBERS],
        "topic": TESTING
    }


];