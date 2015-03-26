namespace Boken.Migrations
{
    using Boken.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Boken.Models.BookDataContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Boken.Models.BookDataContext context)
        {
            // set up dummy data to always be present
            // Authors
            context.Authors.AddOrUpdate(
                    new Author() { Id = 1, Name = "Stephen King", Biography = "Stephen Edwin King, f�dd 21 september 1947 i Portland i Maine, �r en amerikansk f�rfattare, som skrivit m�nga b�cker som har legat p� b�sts�ljarlistorna." +
                                "Han �r framf�rallt verksam inom skr�ckgenren. Flera av hans b�cker har filmatiserats. Han �r ocks� k�nd under pseudonymen Richard Bachman." },
                    new Author() { Id = 2, Name = "Dan Brown", Biography = "Daniel 'Dan' Brown, f�dd 22 juni 1964 i Exeter, New Hampshire, �r en amerikansk f�rfattare. Hans mesta k�nd romaner �r" +
                                "f�rmodligen b�sts�ljarna �nglar och demoner (2000) och Da Vinci-koden (2003). Han har �ven gett ut tv� skivor p� eget skivbolag." },
                    new Author() { Id = 3, Name = "J.R.R. Tolkien", Biography = "Tolkien har gjort sig ett namn som en av de st�rsta inom fantasy-genren och han var den "+
                                "som mer eller mindre grundade den i sin moderna form. Med sina b�cker, och d� fr�mst kanske trilogin Sagan om ringen, har han v�ckt beundran hos " +
                                "miljontals l�sare v�rlden �ver. K�nnetecknande f�r hans verk �r dess detaljrikedom och den ibland n�rmast ogreppbara blandningen av folkslag, spr�k och kulturer." +
                                "N�r han skulle visa n�gons grovhet, eller hur hemskt och fruktansv�rt n�got var, tog han p� ett magnifikt s�tt hj�lp av rollpersonerna i boken, som l�saren redan" +
                                "bekantat sig med. Ett exempel �r n�r br�draskapet m�ter en balrog, d� han ist�llet f�r att fiktivt beskriva denna best, l�ter trollkarlen Gandalf bli orolig. Gandalf "+
                                "�r vid tidpunkten mycket k�nd f�r l�saren, och p� detta s�tt f�r l�saren en inlevelsefull k�nsla av hur fruktansv�rt och m�ktigt monstret �r." },
                    new Author() { Id = 4, Name = "Niklas Gustavsson", Biography = "En av de absolut b�sta f�rfattare n�gonsin, med sina inspirerande b�cker s� som: �lr�vh�nans �ventyr i vattnadalen,"+
                                "Vilken �l i r�ven?. Niklas Gustavsson slutar aldrig f�rbrylla sina l�sare med djupa, k�nslosamma ber�ttelser om k�rlek, BDSM och �l." },
                    new Author() { Id = 5, Name = "Lewis Carroll", Biography = "F�dd 27 januari 1832 i Daresbury." },
                    new Author() { Id = 6, Name = "Miguel Cervantes", Biography = "Spansk, f�dd 1547. Hans mest k�nda verk, Don Quixote �r v�rldsk�nd som en kultbok." },
                    new Author() { Id = 7, Name = "George R.R. Martin", Biography = "George Raymond Richard Martin (�ven kallad GRRM), f�dd 20 september 1948 i Bayonne, New Jersey, USA, �r en amerikansk producent, manus-, fantasy- och science fiction-f�rfattare. 1979 bel�nades han med Nebulapriset f�r Sandkings och 1985 f�r Portraits of His Children." },
                    new Author() { Id = 8, Name = "William Shakespeare", Biography = "William Shakespeare, f�dd 1564 i Stratford-upon-Avon, Warwickshire, d�d 23 april 1616 i Stratford-upon-Avon, var en engelsk dramatiker, poet och sk�despelare" },
                    new Author() { Id = 9, Name = "Herman Melville", Biography = "Herman Melville, f�dd 1 augusti 1819 i New York i New York, d�d 28 september 1891 i New York i New York, var en amerikansk romanf�rfattare och poet. Han �r mest k�nd f�r sin roman Moby Dick (1851)." }
                );

            // Genres
            context.Genres.AddOrUpdate(
                    new Genre() { Id = 1, Name = "Skr�ck", Description = "Skr�ck �r en vid genre som inneh�ller allt fr�n terror till horror, som �r tv� subgenrer inom denna litteratur, dock med varsitt syfte. Den ena �r till f�r de mera blodiga, leml�stande skr�ckhistorierna och den andra f�r de mer djupg�ende psykologiska, melankoliska skr�ckhistorierna. Genren skr�ck inneh�ller s� mycket mer �n vad man kanske inser. Med en viss klassificering f�rv�ntar vi oss vissa egenskaper fr�n det vi antingen ser eller l�ser. Det �r vissa egenskaper som �r utlovade till oss. Beroende p� vad det �r f�r del ur skr�ckgenren som vi kommer i kontakt med s� f�rv�ntar vi oss n�got visst fr�n den. N�got som v�ra dagliga liv inte p� samma s�tt kan ge oss. Den d�r speciella kicken, den kvarvarande minnesbilden, den d�r isande k�nslan nerf�r ryggraden, det bultande hj�rtat och k�nslan av att man kanske inte �r s� ensam som man tror. Vissa av dessa saker b�r vi med oss l�ngre, vi talar om det med v�ra bekanta, sprider det vidare. Det �r s� historier h�ller sig vid liv. Att ber�tta historier �r ju trots allt en muntlig tradition ocks�, vare sig det �r sp�khistorier eller folksagor. Skr�ckgenren spelar p� v�r r�dsla f�r det ok�nda, f�r det vi inte f�rst�r, f�r det vi inte kan se Skr�ckgenren skildrar oftast en m�nniskas, eller en grupp m�nniskors, r�dsla f�r n�got livsfarligt - antingen n�got naturligt som en galen m�rdare, eller n�got �vernaturligt som en vampyr eller varulv. M�nga forskare har definierat skr�ckgenren utifr�n gestaltningen av n�got fr�mmande och monstru�st. Det finns undantag fr�n reglerna. Det finns vissa historier som �r sv�ra att placera i en specifik kategori inom skr�ckgenren, till och med historier som �r sv�ra att placera bara inom skr�ck." },
                    new Genre() { Id = 2, Name = "Thriller", Description = "Nagelbitare. L�s med vita silkeshandskar." },
                    new Genre() { Id = 3, Name = "Fantasy", Description = "Drakar, riddare och troll!" },
                    new Genre() { Id = 4, Name = "Historia", Description = "Faktab�cker om historia." },
                    new Genre() { Id = 5, Name = "Roman", Description = "B�cker som �r bra, viktiga och t�nder en gnista i kistan."}
                );

            context.Ratings.AddOrUpdate(
                    new Rating() { Id = 1, Votes = 10, TotalRating = 85 },
                    new Rating() { Id = 2, Votes = 10, TotalRating = 85 },
                    new Rating() { Id = 3, Votes = 10, TotalRating = 25 },
                    new Rating() { Id = 4, Votes = 10, TotalRating = 77 },
                    new Rating() { Id = 5, Votes = 10, TotalRating = 43 },
                    new Rating() { Id = 6, Votes = 10, TotalRating = 85 },
                    new Rating() { Id = 7, Votes = 10, TotalRating = 50 },
                    new Rating() { Id = 8, Votes = 10, TotalRating = 85 },
                    new Rating() { Id = 9, Votes = 10, TotalRating = 99},
                    new Rating() { Id = 10, Votes = 10, TotalRating = 100 },
                    new Rating() { Id = 11, Votes = 10, TotalRating = 85 }
                );

            // Books
            context.Books.AddOrUpdate(
                    new Book() { Id = 1, RatingId = 1, Title = "Sagan om Ringen", Year = 1948, Price = 199m, ISBN = "1232346431254", InStock = 46, ImagePath = "/Content/Image/saganomringen.jpg", Summary = "Sagan om ringen eller H�rskarringen, i ny�vers�ttning Ringarnas herre (originaltitel The Lord of the Rings), �r en fantasyroman av J.R.R. Tolkien. Den utgavs p� engelska f�r f�rsta g�ngen 1954�1955 uppdelad i tre volymer med titlarna The Fellowship of the Ring, The Two Towers och The Return of the King. Tolkien hade redan 1937 i Bilbo, en hobbits �ventyr, introducerat b�de h�rskarringen, och flera av huvudfigurerna i trilogin." },
                    new Book() { Id = 2, RatingId = 2, Title = "Sk�nes Historia", Year = 1999, Price = 69m, ISBN = "3453712511215", InStock = 12, ImagePath = "http://www.esff.se/dok/dok_info/skane.gif", Summary = "J�evlett vikte bog ti � l�esa. Ell�r iallafall glo p� bild�rna." },
                    new Book() { Id = 3, RatingId = 3, Title = "Da Vinci Kodden", Year = 2006, Price = 255m, ISBN = "1237623312744", InStock = 67, ImagePath = "/Content/Image/davinci.jpg", Summary = "Da Vinci-koden �r en roman av den amerikanske f�rfattaren Dan Brown. Den f�ljer en professor i religionssymbolik, Robert Langdon, som blir indragen i en mordutredning i Paris och uppt�cker en kamp mellan Prieur� de Sion och Opus Dei �ver huruvida Jesus fr�n Nasaret var gift och hade barn med Maria Magdalena." },
                    new Book() { Id = 4, RatingId = 4, Title = "�nglar och Demoner", Year = 1004, Price = 209m, ISBN = "3733745321369", InStock = 247, ImagePath = "/Content/Image/anglarodemoner.jpg", Summary = "�nglar och demoner �r en bestseller-roman av den amerikanske f�rfattaren Dan Brown, utgiven 2000. Den handlar om Harvard-professorn Robert Langdon och dennes st�ndiga kamp mot klockan under jakten p� en m�rdare tillh�rande Illuminati" },
                    new Book() { Id = 5, RatingId = 5, Title = "Det", Year = 1986, Price = 99m, ISBN = "5322341371251", InStock = 12, ImagePath = "/Content/Image/Det.jpg", Summary = "Det (engelsk originaltitel It) �r en roman fr�n 1986 av Stephen King. Den gavs ut i svensk �vers�ttning 1987.[1] Boken har �ven filmatiserats." },
                    new Book() { Id = 6, RatingId = 6, Title = "Alice i underlandet", Year = 1948, Price = 79m, ISBN = "1234323464312", InStock = 46, ImagePath = "/Content/Image/aliceinwonderland.jpg", Summary = "Alice i Underlandet, publicerad 1865. Boken handlar om den lilla flickan Alices �ventyr i en v�rld som strider mot all logik. Den �r Lewis Carrolls mest k�nda bok." },
                    new Book() { Id = 7, RatingId = 7, Title = "Don Quixote", Year = 1948, Price = 9.99m, ISBN = "1235623464312", InStock = 46, ImagePath = "/Content/Image/donquixote.jpg", Summary = "Romanen �r uppkallad efter sin huvudperson, en fattig adelsman som f�rl�ser sig p� �rofyllda riddarromaner och d�rf�r drar ut i v�rlden f�r att uppr�tth�lla romanernas ideal. Han reser p� sin hingst Rosinante, med sin v�pnare, bonden Sancho Panza med m�let att vinna k�rleken av sin �lskade Dulcinea. Dulcinea �r det namn Don Quijote inbillat sig att hon b�r; hennes riktiga namn �r Aldonza. Detta �r en ordvits; ett gammalt spanskt tales�tt lyder, vilket sk�mtsamt antyder att hon blir vald till hj�rtas dam f�r att ingen annan finns att f�." },
                    new Book() { Id = 8, RatingId = 8, Title = "Hamlet", Year = 1948, Price = 9.99m, ISBN = "1232653464312", InStock = 46, ImagePath = "/Content/Image/hamlet.jpg", Summary = "Prins Hamlet �r son till den avlidne kungen och f�r snart h�ra av en v�lnad att den nuvarande kungen, Claudius, har m�rdat fadern. Hamlet �r os�ker p� om v�lnaden har talat sanning och testar kungen genom att l�tsas vara sinnessjuk och s�tta upp en pj�s d�r mordet rekonstrueras. Kungens reaktion p� pj�sen tolkar Hamlet som att denne �r skyldig och beslutar sig f�r att h�mnas." },
                    new Book() { Id = 9, RatingId = 9, Title = "Moby Dick", Year = 1948, Price = 9.99m, ISBN = "1232433464312", InStock = 46, ImagePath = "/Content/Image/mobydick.jpg", Summary = "Romanen handlar om kapten Ahab, som blivit besatt av att jaga en vit kaskelot kallad Moby Dick. Kaptenen saknar ett ben, som han fick avslitet tidigare i sitt liv av samma val. Ahab �r kapten ombord p� Pequod, ett valf�ngstfartyg fr�n �n Nantucket." },
                    new Book() { Id = 10, RatingId = 10, Title = "The Hobbit", Year = 1948, Price = 9.99m, ISBN = "1234523464312", InStock = 46, ImagePath = "/Content/Image/The-hobbit.jpg", Summary = "Bokens huvudperson �r den v�lb�rgade hoben Bilbo Bagger, som bor i en hemtrevlig hoberh�la i jorden. Hober �r 'sm� varelser, mindre �n dv�rgarna (och utan sk�gg) men betydligt st�rre �n lilleputtarna'. De flesta hober ogillar �ventyr, och Bilbo �r inget undantag." },
                    new Book() { Id = 11, RatingId = 11, Title = "Game of Thrones", Year = 1948, Price = 9.99m, ISBN = "1232663464312", InStock = 46, ImagePath = "/Content/Image/gameofthrones.jpg", Summary = "Sju m�ktiga dynastier k�mpar f�r kontrollen �ver det mytiska landet V�steros. Robert Baratheon, kung �ver de sju konungarikena, rider till Vinterhed f�r att be sin gamle v�n Lord Eddard Stark, tj�na som kungens hand, eller h�gsta tj�nsteman." }
                );

            // Book-Author couplings
            context.BookAuthorCouplings.AddOrUpdate(
                new BookAuthorCoupling() { Id = 1, AuthorId = 3, BookId = 1 },
                new BookAuthorCoupling() { Id = 3, AuthorId = 4, BookId = 2 },
                new BookAuthorCoupling() { Id = 4, AuthorId = 2, BookId = 3 },
                new BookAuthorCoupling() { Id = 5, AuthorId = 2, BookId = 4 },
                new BookAuthorCoupling() { Id = 6, AuthorId = 1, BookId = 5 },
                new BookAuthorCoupling() { Id = 9, AuthorId = 5, BookId = 6 },
                new BookAuthorCoupling() { Id = 10, AuthorId = 6, BookId = 7 },
                new BookAuthorCoupling() { Id = 11, AuthorId = 8, BookId = 8 },
                new BookAuthorCoupling() { Id = 12, AuthorId = 9, BookId = 9 },
                new BookAuthorCoupling() { Id = 13, AuthorId = 3, BookId = 10 },
                new BookAuthorCoupling() { Id = 14, AuthorId = 7, BookId = 11 }
                );

            // Book-Genre couplings
            context.BookGenreCouplings.AddOrUpdate(
                new BookGenreCoupling() { Id = 1, GenreId = 3, BookId = 1 },
                new BookGenreCoupling() { Id = 3, GenreId = 4, BookId = 2 },
                new BookGenreCoupling() { Id = 4, GenreId = 2, BookId = 3 },
                new BookGenreCoupling() { Id = 5, GenreId = 2, BookId = 4 },
                new BookGenreCoupling() { Id = 6, GenreId = 1, BookId = 5 },
                new BookGenreCoupling() { Id = 9, GenreId = 3, BookId = 6 },
                new BookGenreCoupling() { Id = 10, GenreId = 5, BookId = 7 },
                new BookGenreCoupling() { Id = 11, GenreId = 5, BookId = 8 },
                new BookGenreCoupling() { Id = 12, GenreId = 5, BookId = 9 },
                new BookGenreCoupling() { Id = 13, GenreId = 3, BookId = 10 },
                new BookGenreCoupling() { Id = 14, GenreId = 3, BookId = 11 },
                new BookGenreCoupling() { Id = 15, GenreId = 2, BookId = 11 }
                );
        }
    }
}
