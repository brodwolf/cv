"use client"

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Card, CardHeader, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Section } from "../components/ui/section";
import { GlobeIcon, Languages, MailIcon, CalendarPlus } from "lucide-react";
import { Button } from "../components/ui/button";
import { RESUME_DATA } from "../data/resume-data";
import { ProjectCard } from "../components/project-card";
import Image from 'next/image'
import { getCalApi } from '@calcom/embed-react'
import { useEffect } from "react";


export default function Page() {
    useEffect(() => {
        (async function () {
        const cal = await getCalApi({"namespace":"quickchat"});
        cal("floatingButton", {"calLink":"wilham-brodwolf/quickchat","config":{"layout":"month_view","theme":"light"},"buttonColor":"#ffffff","buttonTextColor":"#000000","buttonText":"Let's chat!"});
        cal("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});
        })();
    }, [])

    useEffect(() => {
        (async function () {
          const cal = await getCalApi({"namespace":"quickchat"});
          cal("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});
        })();
      }, [])


  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about}
            </p>

            <div className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <div
                className="inline-flex gap-x-1.5 items-center align-baseline leading-none hover:underline"
              >
                <Languages className="h-3 w-3" />
                <Image
                  className="rounded-lg"
                  src="/brazil.png"
                  width={24}
                  height={24}
                  alt="brazil"
                  />
                <Image
                  className="rounded-lg"
                  src="/united-kingdom.png"
                  width={24}
                  height={24}
                  alt="united-kingdom"
                  />
                <Image
                  className="rounded-lg"
                  src="/spain.png"
                  width={24}
                  height={24}
                  alt="spain"
                />
              </div>
            </div>

            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="h-3 w-3" />
                {RESUME_DATA.location}
              </a>
            </p>

            <button data-cal-namespace="quickchat"
                data-cal-link="wilham-brodwolf/quickchat"
                
                data-cal-config='{"layout":"month_view","theme":"light"}'
            >

                <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                <a
                    className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                >
                    <CalendarPlus className="h-3 w-3" />
                    Schedule a quick chat with me.
                </a>
                </p>
            </button>
            
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="h-8 w-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="h-4 w-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="h-8 w-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <Avatar className="h-28 w-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={education.link} target="_blank">
                        {education.school}
                      </a>
                      <span className="inline-flex gap-x-1">
                        {education.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 font-mono text-sm leading-none">
                  {education.degree}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        
        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card className="mb-2" key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-2 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="default"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {work.description}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {work.technologies.map((technology) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={technology}
                      >
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Projects and Contributions</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  role={project.role}
                  tags={project.techStack}
                  link={"link" in project ? project?.link?.href : undefined}
                />
              );
            })}
          </div>
        </Section>
      </section>
    </main>
  );
}
