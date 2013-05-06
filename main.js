var engine = require('text_based_adventure_engine');
var player = new engine.Player({ name : 'Bernard', fullname : 'Bernard Manning', subjectPronoun : 'he', objectPronoun : 'him' });

/* Switch to past tense third person */

Array.prototype.niceJoin.prefix = 'There was ';
engine.Room.prototype.lookAroundPrefix =  '%(player.name)s looked around, %(player.subjectPronoun)s was in %(object.description)s. ';

/* The player starts in a Train Carraige */
var trainCompartment = new engine.Room({ name : 'train compartment', description : 'a 2nd class train compartment' });
trainCompartment.addItem( player );

/* Arrvial at different stations at fixed times */

/* There are two other characters in the compartment. An old gentleman and a young lady. */

var gentleman = new engine.NPC({ name : 'Elijah', fullname : 'Elijah Altt Hewitson', subjectPronoun : 'he', description : 'a little old man on the seat opposite %(player.objectPronoun)s' });
trainCompartment.addItem( gentleman );

var lady = new engine.NPC({ name : 'Audrey', fullname : 'Audrey W. Haugh', subjectPronoun : 'she', description : 'a young lady next to the window' });
trainCompartment.addItem( lady );


/* The gentleman has a pamphet which he'll give you if you complete the correct conversation path */

/* If you hit a particular conversation path with the woman, she'll leave the carriage */

/* Third character a ticket incepect arrives to check tickets */

/* Player has a briefcase which containers Sandwiches, and an apple. You of course also have a ticket */

/*

Previous example 

startRoom = new engine.Room({ name : 'bunk room', description : 'a cramped little room, the walls appear to be a dark and metallic, there\'s a dim dripping sound in the distance' });
startRoom.addItem( new engine.Dice(), new engine.Clock(), new engine.Television() );
corridor = new engine.Room({ name : 'corridor', description : 'a long dimly lit corridor' });
atrium = new engine.Room({ name : 'atrium', description : 'a cavenous atrium, poorly lit. Above you is a huge rounded skylight'  });
atrium.addItem();

engine.Door.link( startRoom, corridor, { name : 'steel door', description : 'a steel door, with a metal flap at eye level, slightly ajar' } );
engine.Door.link( corridor, atrium, { name : 'double door', description : 'a set of sliding metal doors' } );

startRoom.addItem( player );

player.see('You slowly open your eyes. Your in a dark cramped bunk.');

*/

engine.Shell.attachPlayerToShell( player );