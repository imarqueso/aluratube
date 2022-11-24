import styled from "styled-components";

export const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  .barra {
    padding-bottom: 20px;
  }
  .barra::-webkit-scrollbar-track {
    background-color: #202020;
  }
  .barra::-webkit-scrollbar {
    height: 8px;
    background: #202020;
  }
  .barra::-webkit-scrollbar-thumb {
    background: #404040;
  }
  .timeline img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  .timeline {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    div {
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px, 1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
  .canais {
    width: 100%;
    overflow: hidden;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .canais-content {
    width: 100%;
    overflow-x: scroll;
    padding: 16px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .canal-card {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
  }
  .canal-card a {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 0px;
    margin: 0px;
    margin-right: 15px;
    margin-bottom: 15px;
    overflow: hidden;
  }
  .canal-card img {
    width: 105%;
    height: auto;
    margin: 0px;
  }
`;
