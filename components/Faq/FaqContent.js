import React, { Component } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from 'react-accessible-accordion';

class FaqContent extends Component {
  render() {
    return (
      <div className='faq-accordion'>
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How does Truthink keep money or advertisers from influencing its
                content?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className='accordion-content'>
                Truthink will make all funding by advertisers, or donations over
                $500, publicly available on its "Notable Donations" page.
                Otherwise, our hope is to be funded entirely through small
                donations from our users. $3 or $5 per month is all we'd ask to
                be able to afford a high level, neutral debate platform.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Will membership, or donation, ever be required to view content /
                debates ?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className='accordion-content'>
                No, Truthink will always be free to visit and read the debate
                content.{' '}
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How will Truthink make sure that the information and arguments
                are accurate?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className='accordion-content'>
                Initially, the platform will rely on a few dedicated debators
                who will agree to abide by principles of: Truthful and Honorable
                Debatesmanship. Users will be able to ask questions and interact
                with those arguments.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                What if I feel a source is incorrect, or biased?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className='accordion-content'>
                If you feel an argument is based on inaccurate, or biased
                information, feel free to bring that topic to light. We welcome
                those conversations.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Is Truthink left, or right, leaning politically?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className='accordion-content'>
                Truthink is just the platform for the discussion. By nature
                Truthink is neither, liberal nor conservative. We do plan to
                have contributors from the broad spectrum of political beliefs.
                Truthink vows to always remain neutral, only moderating the
                discussion, and keeping the arguments civil.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Can I share resources I've found that add to the arguments?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className='accordion-content'>
                Of course! We welcome the interaction. We do hope that you'll do
                your own fact checking before you share your resource.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How can I support Truthink?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className='accordion-content'>
                We always appreciate it whenever anyone interacts with, shares
                the content, uses or donates to the platform.{' '}
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

export default FaqContent;
