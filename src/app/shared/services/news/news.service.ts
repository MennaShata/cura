import { Injectable } from '@angular/core';
import { Inews } from '../../models/interfaces/Inews';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private news: Inews[] = [
    {
      id: 1,
      title: "Schizophrenia is likely a side effect of our brain’s complex evolution",
      content: "More and more studies have been illuminating the genetic components of schizophrenia, a condition that affects about 1 percent of the world's population. The largest twin study of schizophrenia put 79 percent of the risk of the condition down to genes, while another believed that genetic mutations in the brain's glial cells may be responsible for the disorder.Experts predict we will find a cure for schizophrenia in about 10 years.  As a result of our growing understanding, neuroscientists suspect that they also know why it developed in the first place.Those who suffer from it may be paying the price for humankind’s advanced cognitive capabilities.A new Australian study lends credence to this view. Scientists found a specific genetic pathway comprised of 97 genes, linked to genetic changes in the brain region associated with schizophrenia.This supports the theory that the psychiatric condition may be an unwanted side effect of our brain's evolution. Researchers at the Florey Institute for Neuroscience and Mental Health in Parkville, Australia, made this discovery. Their findings were published in the journal npj Schizophrenia.Before the advent of science, those with schizophrenia were thought to be possessed. Today we know that epigenetic changes trigger schizophrenia. It’s set off by some type of trauma, ranging from a dysfunctional family to childbirth. ",
      publisher: "John",
      image: "./../../../assets/images/n1.jpg",
      source: "Africa",
      date: "2018-04-11",
    },
    {
      id: 2,
      title: "When One Teen Vapes, Others Often Follow .",
      content: "Brenda Goodman is a senior news writer for WebMD and Andy Miller is editor and CEO of Georgia Health News. Freelance writers Erica Hensley and Elizabeth Fite also contributed to this report. This investigation was supported by a grant from the Arthur M. Blank Family Foundation. June 12, 2017 -- In water, lead is a ghost poison. It has no taste or smell. It’s usually invisible. And it can stay in plumbing for years, gradually dissolving and flaking off into water we use for cooking and drinking. Lead was banned from plumbing decades ago, but as the crisis in Flint, MI, has shown, the threat remains. “It never even dawned on me that we would have lead in our pipes,” says Allison, a homeowner in Sandy Springs, an affluent suburb of Atlanta, who asked us not to use her last name. Allison’s home, a stately brick residence, is valued by the real estate website Redfin.com at more than $1 million. In 2015, tests by the Atlanta Water Department -- which supplies water to Sandy Springs -- found levels of lead in Allison’s water that were over the EPA’s limit. While the lead in her water was not welcome news, Allison at least found out she had a problem because the testing worked. In plenty of other water utilities around Georgia and the U.S., the system for testing lead in water is not working as it should, leaving people uninformed and unprotected. We reviewed lead testing records obtained through the Open Records Act for water systems in Georgia serving at least 10,000 people. Together, they provide water to about three-quarters of the state’s population. We then compared lead testing addresses to property records for the same locations. We found a process hindered by poor record keeping and an apparent failure to follow a federal rule that’s been on the books for more than 25 years.",
      publisher: "Adams",
      image: "./../../../assets/images/n2.jpg",
      source: "Americas",
      date: "2018-08-24",
    },
    {
      id: 3,
      title: "Sleep paralysis and hallucinations are prevalent in student athletes",
      content: "Pilot data from a recent study suggest that sleep paralysis and dream-like hallucinations as you are falling asleep or waking up are widespread in student athletes and are independently associated with symptoms of depression. This study is the first to examine the relationship between these sleep symptoms and mental health in student athletes, independent of insufficient sleep duration or insomnia. Occasional sleep paralysis was reported by 18 percent of the sample, and 7 percent reported that this happens at least once per week. Hypnogogic/hypnopompic hallucinations (which are dream-like experiences that occur while falling asleep or waking up) were reported by 24 percent of the sample, and 11 percent reported that they experience these symptoms at least once per week. Compared to those who never experience sleep paralysis or hypnogogic/hypnopompic hallucinations, those who did experience them -- even rarely -- also reported higher depression scores. This was even the case after controlling for how much sleep or what quality of sleep the person experienced.  These symptoms are often thought to be relatively harmless and quite rare. But they can be very distressing to those who experience them, and they may be surprisingly common among student athletes, said senior author Michael Grandner, PhD, MTR, the director of the Sleep and Health Research Program and assistant professor of psychiatry at the University of Arizona College of Medicine. What was also surprising was that the degree to which people reported these symptoms predicted severity of depression symptoms, even after controlling for poor sleep and lack of sleep -- which can contribute to both depression and these types of sleep symptoms.",
      publisher: "Daniel",
      image: "./../../../assets/images/n6.jpg",
      source: "China",
      date: "2017-11-30",

    },
    {
      id: 4,
      title: "Daily fasting works for weight loss, finds report on 16:8 diet",
      content: "Daily fasting is an effective tool to reduce weight and lower blood pressure, according to a new study published by University of Illinois at Chicago researchers in the journal Nutrition and Healthy Aging. The study is the first to examine the effect of time-restricted eating -- a form of fasting that limits food consumption to select hours each day -- on weight loss in obese individuals. To study the effect of this type of diet, researchers worked with 23 obese volunteers who had an average age of 45 and average body mass index, or BMI, of 35. Between the hours of 10 a.m. and 6 p.m. the dieters could eat any type and quantity of food they desired, but for the remaining 16 hours they could only drink water or calorie-free beverages. The study followed the participants for 12 weeks. When compared to a matched historical control group from a previous weight loss trial on a different type of fasting, the researchers found that those who followed the time-restricted eating diet consumed fewer calories, lost weight and had improvements in blood pressure. On average, participants consumed about 350 fewer calories, lost about 3 percent of their body weight and saw their systolic blood pressure decreased by about 7 millimeters of mercury (mm Hg), the standard measure of blood pressure. All other measures, including fat mass, insulin resistance and cholesterol, were similar to the control group. The take-home message from this study is that there are options for weight loss that do not include calorie counting or eliminating certain foods, said Krista Varady, associate professor of kinesiology and nutrition in the UIC College of Applied Health Sciences and corresponding author on the study.",
      publisher: "William",
      image: "./../../../assets/images/n4.jpg",
      source: "Oceania",
      date: "2018-01-01",
    },
    {
      id: 5,
      title: "The neurons that rewrite traumatic memories",
      content: "Memories of traumatic experiences can lead to mental health issues such as post-traumatic stress disorder (PTSD), which can destroy a person's life. It is currently estimated that almost a third of all people will suffer from fear- or stress-related disorders at one point in their lives. Now, a new study shows -- at the cellular level -- how therapy can treat even long-term memories of trauma. Our findings shed, for the first time, light onto the processes that underlie the successful treatment of traumatic memories, says EPFL Professor Johannes Gräff, whose lab carried out the study. In the field of treating traumatic memories there has been a long-debated question of whether fear attenuation involves the suppression of the original memory trace of fear by a new memory trace of safety or the rewriting of the original fear trace towards safety. Part of the debate has to do with the fact that we still don't understand exactly how neurons store memories in general. Although they don't exclude suppression, the findings from this study show for the first time the importance of rewriting in treating traumatic memories. Research in this area focuses on understanding the brain's capacity to reduce traumatic memories, but surprisingly few studies have investigated treatment options for attenuating long-lasting trauma (aka remote fear) in animal models.  The EPFL scientists found that remote fear attenuation in the brain is connected to the activity of the same group of neurons that are also involved in storing these memories. Working with mice, the scientists have located these neurons in the brain's dentate gyrus, an area of the hippocampus that is involved in the encoding, recall, and the reduction of fear.",
      publisher: "Oliver",
      image: "./../../../assets/images/n5.jpg",
      source: "Europe",
      date: "2017-08-26",
    },
    {
      id: 6,
      title: "Increased risk of birth defects in babies after first-trimester exposure to lithium",
      content: "Researchers from the Icahn School of Medicine at Mount Sinai found an elevated risk of major congenital malformations in fetuses after first-trimester exposure to lithium, in the largest study ever to examine the risk of birth defects in lithium-exposed babies.  Nearly one and one-half times as many babies exposed to lithium during the first trimester experienced major malformations compared to the unexposed group (7.4 percent compared with 4.3 percent). In addition, risk for neonatal hospital readmission was nearly doubled in lithium-exposed babies compared to the unexposed group (27.5 percent versus 14.3 percent). However, lithium exposure was not associated with pregnancy complications or other delivery outcomes, such as pre-eclampsia, preterm birth, gestational diabetes, or low birth weight. In addition, the researchers found that the risk of birth defects in lithium-exposed infants was lower than previously thought, because previous studies did not look at large enough populations. The study will be published online in The Lancet Psychiatry.The study examined the risk of congenital malformations such as heart defects and pregnancy complications in a meta-analysis of primary data from 727 lithium-exposed pregnancies compared to a control group of 21,397 pregnancies in mothers with a mood disorder who were not taking lithium. The data was taken from six study sites in Denmark, Canada, the Netherlands, Sweden, the United Kingdom, and the United States. The researchers also measured delivery outcomes and neonatal hospital readmissions within 28 days of birth. Lithium therapy is widely recommended as a first-line treatment for bipolar disorder, which affects approximately 2 percent of the world's population. Lithium helps to prevent severe depression and mania. In the United States, bipolar disorder is more commonly treated with anti-psychotic drugs instead of lithium. ",
      publisher: "Tomas",
      image: "./../../../assets/images/n3.jpg",
      source: "India",
      date: "2016-12-09",
    }
  ]

  private newsDisplay: Inews[] = this.news.slice();

  constructor() {

  }

  public getNewsList(): Observable<Inews[]> {
    return of(this.news);
  }

  public delete(id: number) {
    const index = this.news.findIndex(a => a.id == id);
    if (index > -1) {
      this.news.splice(index, 1);
    }

  }

  public getById(id: number) {
    const index = this.news.findIndex(a => a.id == id);
    if (index > -1) {
      return this.news[index];
    }

  }

  public add(oneNews: Inews) {
    this.news.push(oneNews);

  }

  public Update(newNews: Inews) {
    let index = this.news.findIndex(a => a.id === newNews.id);
    console.log(this.news[index]);
    this.news[index].title = newNews.title;
    this.news[index].content = newNews.content;
    this.news[index].publisher = newNews.publisher;
    this.news[index].image = newNews.image;
    this.news[index].source = newNews.source;
    this.news[index].date = newNews.date;
  }

  newsSearch(newsName) {
    if (newsName != '' && newsName != null && newsName.length > 1) {
      this.newsDisplay = [];
      this.newsDisplay = this.news.filter(a => a.title.toLowerCase().indexOf(newsName.toLowerCase()) > -1);
    }
    else {
      this.newsDisplay = this.news;
    }
    return this.newsDisplay;
  }

}