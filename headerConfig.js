// Header configuration object.
const config = {
  padding: {
    min: 6,
    max: 22
  },
  avatarSize: {
    min: 100,
    max: 180
  },
  h1Size: {
    min: 22,
    max: 50
  },
  pSize: {
    min: 18,
    max: 22
  }
}

const header = document.querySelector('header');

// Setting header scroll effect.
let initialScroll = 0;

// Header padding scroll handler.
const updateHeaderPadding = () => {
  const headerPadding = Math.max(
    config.padding.max - (window.scrollY - initialScroll) / 4,
    config.padding.min
  );

  header.style.paddingTop = `${headerPadding}px`;
  header.style.paddingBottom = `${headerPadding}px`;
}

updateHeaderPadding();

// Avatar size scroll handler.
const headerAvatar = document.querySelector('#avatar img');

const updateAvatarSize = () => {
  const headerAvatarSize = Math.max(
    config.avatarSize.max - (window.scrollY - initialScroll),
    config.avatarSize.min
  );

  headerAvatar.style.width = `${headerAvatarSize}px`;
  headerAvatar.style.height = `${headerAvatarSize}px`;
}

updateAvatarSize();

// H1 font size scroll handler.
const headerH1 = document.querySelector('header h1');

const updateH1Size = () => {
  const headerH1Size = Math.max(
    config.h1Size.max - (window.scrollY - initialScroll) / 4,
    config.h1Size.min
  );

  headerH1.style.fontSize = `${headerH1Size}px`;
  console.log(headerH1Size);
}

updateH1Size();

// P font size scroll handler.
const paragraph = document.querySelector('header p');

const updatePSize = () => {
  const pSize = Math.max(
    config.pSize.max - (window.scrollY - initialScroll) / 16,
    config.pSize.min
  );

  paragraph.style.fontSize = `${pSize}px`;
}

window.addEventListener('scroll', () => {
  if (window.scrollY < 600) {
    // Avatar.
    updateAvatarSize();

    // Heading.
    updateH1Size();

    // Padding.
    updateHeaderPadding();

    // Paragraph.
    updatePSize();
  }
});

// Setting initial margin.
const firstSection = document.querySelector('section');
firstSection.style.paddingTop = `242px`;