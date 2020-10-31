import React from 'react';
import './homepage.scss';
import Hero from '../../components/hero/hero.cmp';
import ItemHome from '../../components/item-home/item-home.cmp';
import { FullPage, Slide } from 'react-full-page';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sections: [
				{
					id: 1,
					title: 'Storyteller',
					subtitle: 'Sunrise | Sunset Outdoor Family Photoshoot',
					imageUrl: 'https://res.cloudinary.com/dy8c4mtkl/image/upload/v1604023477/Screen_Shot_2020-10-29_at_8.58.18_PM_wotmdb.png',
					revield: false
				},
				{
					id: 2,
					title: 'Lifestyle',
					subtitle: 'In home sessions',
					imageUrl: 'https://res.cloudinary.com/dy8c4mtkl/image/upload/v1604023476/Screen_Shot_2020-10-29_at_8.58.32_PM_s94vgr.png',
					revield: false
				},
				{
					id: 3,
					title: 'Connection',
					subtitle: 'I have found  lhe one whom my soul  loves',
					imageUrl:
						'https://res.cloudinary.com/dy8c4mtkl/image/upload/v1604023478/Screen_Shot_2020-10-29_at_8.58.11_PM_ru4xgm.png',
					revield: false
				},
				{
					id: 4,
					title: 'Wedding',
					subtitle: 'Youre big day',
					imageUrl: 'https://res.cloudinary.com/dy8c4mtkl/image/upload/v1604023477/Screen_Shot_2020-10-29_at_8.57.59_PM_efafd0.png',
					revield: false
				}
			]
		};
	}

	handleWaypoint = (index, action) => {
		this.setState((state) => {
			const list = state.sections.map((item, i) => {
				if (index === i) {
					if (action === 'enter') {
						return (item.revield = true);
					} else if (action === 'leave') {
						return (item.revield = false);
					}
				}
				return item;
			});
			return {
				list
			};
		});
	};

	render() {
		return (
			<FullPage className="fullpage-wrapper">
				<Slide>
					<Hero />
				</Slide>
				{this.state.sections.map((item, index) => (
					<Slide key={item.id}>
						<ItemHome item={item} handleWaypoint={this.handleWaypoint} reviel={this.state.sections} index={index} />
					</Slide>
				))}
			</FullPage>
		);
	}
}

export default HomePage;
