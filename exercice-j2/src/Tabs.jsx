import React, { useState } from 'react';
import Tab from './Tab';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabsData = [
    { title: 'Tab 1', content: 'Contenu de l\'onglet 1' },
    { title: 'Tab 2', content: 'Contenu de l\'onglet 2' },
    { title: 'Tab 3', content: 'Contenu de l\'onglet 3' },
  ];

    return (
        <>
          <section>
            {tabsData.map((tab, index) => (
              <button key={index} onClick={() => handleTabClick(index)}>
                {tab.title}
              </button>
            ))}
          </section>
          <article>
            {tabsData.map((tab, index) => (
              <Tab
                key={index}
                title={tab.title}
                content={tab.content}
                isActive={index === activeTab}
              />
            ))}
          </article>
        </>
    );
}

export default Tabs;