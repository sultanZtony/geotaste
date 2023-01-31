import requests
from bs4 import BeautifulSoup
import re
import progressbar


def wiki_scraper():

    country_labels = {}

    r = requests.get(
        "https://en.wikipedia.org/wiki/Category:Record_labels_by_country")

    soup = BeautifulSoup(r.content, features="html.parser")

    country_links = {}

    index = 0

    list_section = soup.find_all(href=(re.compile("/wiki/Category")))
    for x in list_section[5:82]:
        country_links[x["href"][(x["href"].find(":", 6) + 1):(x["href"].find("_", (x["href"].find(":", 6) + 1)))]] = "https://en.wikipedia.org/" + x["href"]
    for x in country_links.keys():
        country_labels[x] = []
    with progressbar.ProgressBar(max_value=86) as bar:    
        for x in country_links.keys():
            r = requests.get(country_links[x])
            while(r):
                soup = BeautifulSoup(r.content, features="html.parser")
                r = None
                search = soup.find(id="mw-pages")
                if(search):
                    search = search.find("div", attrs={"class": "mw-category"})
                    if(search):
                        link_search = search.find("a")
                        #print(link_search)
                        for country_links[x] in range(len(search.find_all(
                                "a"))):
                            #print(link_search)
                            if(link_search.getText() == "next page"):
                                r = requests.get("https://en.wikipedia.org" + link_search["href"])
                            else:
                                if(link_search.getText() != "previous page"):
                                    country_labels[x].append(link_search.getText())
                                    #print(link_search.getText())
                            link_search = link_search.find_next("a")
                        if(link_search.getText() == "previous page"):
                            link_search = link_search.find_next("a")
                        if(link_search.getText() == "next page"):
                            r = requests.get("https://en.wikipedia.org" + link_search["href"])
                    elif(soup.find("div", attrs={"class": "mw-content-ltr"})):
                        for country_links[x] in soup.find_all("div", attrs={"class": "mw-content-ltr"}):
                            if("h3" in country_links[x].contents[0].name):
                                search = country_links[x]
                        link_search = search.find("a")
                        for country_links[x] in range(len(search.find_all(
                                "a"))):
                            country_labels[x].append(link_search.getText())
                            #print(link_search.getText())
                            link_search = link_search.find_next("a")
                index += 1
            bar.update(index)
    print(country_labels)


wiki_scraper()
